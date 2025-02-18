import { NativeModule, requireNativeModule } from 'expo';

import { AssetPackDeliveryModuleEvents } from './AssetPackDelivery.types';

declare class AssetPackDeliveryModule extends NativeModule<AssetPackDeliveryModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AssetPackDeliveryModule>('AssetPackDelivery');
