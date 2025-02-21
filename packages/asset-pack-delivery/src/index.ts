import { LegacyEventEmitter, requireNativeModule } from "expo-modules-core";

const moduleName = 'AssetPackDelivery';

const moduleEventEmitter = new LegacyEventEmitter(requireNativeModule(moduleName));

export async function loadPackedAssetAsBase64(assetName: string, assetPackName?: string): Promise<string> {
    return requireNativeModule(moduleName).loadPackedAssetAsBase64(assetName, assetPackName);
}

export async function loadPackedAssetAsByteArray(assetName: string, assetPackName?: string): Promise<string> {
    return requireNativeModule(moduleName).loadPackedAssetAsByteArray(assetName, assetPackName);
}

export async function requestAssetPackFetch(assetPackNames: string[]): Promise<AssetPackStates> {
    return requireNativeModule(moduleName).requestAssetPackFetch(assetPackNames);
}

export async function getAssetPackStates(assetPackNames: string[]): Promise<AssetPackStates> {
    return requireNativeModule(moduleName).getAssetPackStates(assetPackNames);
}

export function addAssetPackProgressListener(callback: (state: AssetPackState) => void) {
    return moduleEventEmitter.addListener('onAssetPackStateUpdate', callback);
}

export type AssetPackStates = Record<AssetPackState['name'], AssetPackState>

export interface AssetPackState {
    name: string;
    status: AssetPackStatus;
    errorCode?: number;
    bytesDownloaded: number;
    totalBytesToDownload: number;
    transferProgressPercentage: number;
}

export enum AssetPackStatus {
    UNKNOWN = 0,
    PENDING = 1,
    DOWNLOADING = 2,
    TRANSFERRING = 3,
    COMPLETED = 4,
    FAILED = 5,
    CANCELLED = 6,
    WAITING_FOR_WIFI = 7,
    NOT_INSTALLED = 8,
}
