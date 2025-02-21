import {
    ConfigPlugin,
    withPlugins,
    withAppBuildGradle,
    WarningAggregator,
    withBaseMod,
    withSettingsGradle,
    createRunOncePlugin
} from '@expo/config-plugins';

const fs = require('fs');
const path = require('path');

interface AssetPack {
    name: string,
    path: string,
    deliveryMode: 'install-time' | 'fast-follow' | 'on-demand'
}

const withAssetPackDelivery: ConfigPlugin<AssetPack[]> = (expoConfig, assetPacks: AssetPack[] = []) => {
    return withPlugins(
        expoConfig,
        [
            [withAssetPackDeliveryAppBuildGradle, assetPacks],
            [withAssetPackDeliverySettingsGradle, assetPacks],
            [withAssetPackDeliveryFiles, assetPacks]
        ]
    )
}

const withAssetPackDeliveryAppBuildGradle: ConfigPlugin<AssetPack[]> = (expoConfig, assetPacks) => {
    return withAppBuildGradle(expoConfig, (config) => {
        if (config.modResults.language === 'groovy') {
            config.modResults.contents = addAssetPacksToAppBuildGradle(config.modResults.contents, assetPacks)
        } else {
            throw new Error('Cannot add Asset Pack Delivery asset packs to build.gradle because it is not groovy');
        }
        return config;
    })
}

const addAssetPacksToAppBuildGradle = (buildGradle: string, assetPacks: AssetPack[]) => {
    if (/assetPacks = \[/.test(buildGradle)) {
        WarningAggregator.addWarningAndroid('assetPacks', 'Asset packs are already configured in build.gradle');
        return buildGradle;
    }

    return buildGradle.replace(
        /android\s?{/,
        `android {
            assetPacks = ${JSON.stringify(assetPacks.map(p => ':' + p.name))}`
    );
}

const withAssetPackDeliverySettingsGradle: ConfigPlugin<AssetPack[]> = (expoConfig, assetPacks) => {
    return withSettingsGradle(expoConfig, (config) => {
        if (config.modResults.language === 'groovy') {
            config.modResults.contents = addAssetPacksToSettingsGradle(config.modResults.contents, assetPacks)
        } else {
            throw new Error('Cannot add Asset Pack Delivery asset packs to settings.gradle because it is not groovy');
        }
        return config;
    })
}

const addAssetPacksToSettingsGradle = (settingsGradle: string, assetPacks: AssetPack[]) => {
    if (assetPacks.some(p => settingsGradle.includes(`include ':${p.name}'`))) {
        WarningAggregator.addWarningAndroid('assetPacks', 'Asset Packs are already configured in settings.gradle');
        return settingsGradle
    }

    return settingsGradle + '\n' + assetPacks.map(p => `include ':${p.name}'`).join('\n');
}

const withAssetPackDeliveryFiles: ConfigPlugin<AssetPack[]> = (expoConfig, assetPacks) => {
    return withBaseMod(
        expoConfig,
        {
            platform: 'android',
            mod: 'assetPackLink',
            isProvider: true,
            action: (config) => {
                const androidRoot = config.modRequest.platformProjectRoot;
                for (const assetPack of assetPacks) {
                    const assetPackRoot = `${androidRoot}/${assetPack.name}`;
                    const assetPackSrcMain = `${assetPackRoot}/src/main`;
                    if (!fs.existsSync(assetPackSrcMain)) {
                        fs.mkdirSync(assetPackSrcMain, {recursive: true});
                    }
                    const assetPackBuildGradle = `${assetPackRoot}/build.gradle`;
                    if (!fs.existsSync(assetPackBuildGradle)) {
                        fs.writeFileSync(assetPackBuildGradle, getAssetPackBuildGradle(assetPack));
                    }
                    const assetPackLinkTarget = `${assetPackSrcMain}/assets`;
                    if (!fs.existsSync(assetPackLinkTarget)) {
                        fs.symlinkSync(path.resolve(config.modRequest.projectRoot, assetPack.path), assetPackLinkTarget, 'dir');
                    }
                }
                return config;
            }
        }
    )
}

const getAssetPackBuildGradle = (assetPack: AssetPack) => {
    return `plugins {
        id 'com.android.asset-pack'
    }

    assetPack {
        packName = "${assetPack.name}"
        dynamicDelivery {
            deliveryType = "${assetPack.deliveryMode}"
        }
    }\n`
}

const pkg = require('../../package.json');

export default createRunOncePlugin(
    withAssetPackDelivery,
    'asset-pack-delivery-plugin',
    pkg.version
)