package expo.modules.assetpackdelivery

import android.content.Context
import android.content.res.AssetManager
import android.os.Bundle
import androidx.core.os.bundleOf
import com.google.android.play.core.assetpacks.AssetPackManager
import com.google.android.play.core.assetpacks.AssetPackManagerFactory
import com.google.android.play.core.assetpacks.AssetPackState
import com.google.android.play.core.ktx.requestFetch
import com.google.android.play.core.ktx.requestPackStates
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import expo.modules.kotlin.functions.Coroutine
import java.io.FileInputStream
import java.io.InputStream
import java.util.Base64

class AssetPackDeliveryModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("AssetPackDelivery")

    AsyncFunction("loadPackedAssetAsByteArray") { assetName: String, assetPackName: String?, promise: Promise ->
      promise.resolve(readAssetAsBytes(assetName, assetPackName))
    }

    AsyncFunction("loadPackedAssetAsBase64") { assetName: String, assetPackName: String?, promise: Promise ->
      promise.resolve(Base64.getEncoder().encodeToString(readAssetAsBytes(assetName, assetPackName)))
    }

    AsyncFunction("getAssetPackStates") Coroutine { assetPackNames: List<String> ->
      assetPackManager.requestPackStates(assetPackNames).packStates()
        .mapValues { assetPackStateAsBundle(it.value) }
    }

    AsyncFunction("requestAssetPackFetch") Coroutine { assetPackNames: List<String> ->
      assetPackManager.requestFetch(assetPackNames)
    }


    Events("onAssetPackStateUpdate")

    OnStartObserving {
      assetPackManager.registerListener(listener)
    }

    OnStopObserving {
      assetPackManager.unregisterListener(listener)
    }
  }

  private val context: Context
    get() = requireNotNull(appContext.reactContext)

  /** AssetManager for install-time assets. */
  private val assetManager: AssetManager
    get() = context.assets

  /** AssetPackManager for on-demand assets. */
  private val assetPackManager: AssetPackManager
    get() = requireNotNull(AssetPackManagerFactory.getInstance(context))

  private val listener = ExpoAssetPackStateUpdateListener(this)

  private fun readAssetAsBytes(assetName: String, assetPackName: String?): ByteArray {
    val stream: InputStream
    if (assetPackName != null) {
      val packLocation = assetPackManager.getPackLocation(assetPackName)?.assetsPath()
      stream = FileInputStream("$packLocation/$assetName")
    } else {
      stream = assetManager.open(assetName)
    }
    try {
      return stream.readBytes()
    } finally {
      stream.close()
    }
  }

  public fun assetPackStateAsBundle(state: AssetPackState): Bundle {
    return bundleOf(
      "name" to state.name(),
      "status" to state.status(),
      "errorCode" to state.errorCode(),
      "bytesDownloaded" to state.bytesDownloaded(),
      "totalBytesToDownload" to state.totalBytesToDownload(),
      "transferProgressPercentage" to state.transferProgressPercentage()
    )
  }
}
