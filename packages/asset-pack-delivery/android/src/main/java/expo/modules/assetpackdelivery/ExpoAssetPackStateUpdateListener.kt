package expo.modules.assetpackdelivery

import com.google.android.play.core.assetpacks.AssetPackState
import com.google.android.play.core.assetpacks.AssetPackStateUpdateListener

class ExpoAssetPackStateUpdateListener(val module: AssetPackDeliveryModule) : AssetPackStateUpdateListener {
    override fun onStateUpdate(state: AssetPackState) {
        module.sendEvent("onAssetPackStateUpdate", module.assetPackStateAsBundle(state))
    }
}