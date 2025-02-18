import { registerWebModule, NativeModule } from 'expo';

import { AssetPackDeliveryModuleEvents } from './AssetPackDelivery.types';

class AssetPackDeliveryModule extends NativeModule<AssetPackDeliveryModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(AssetPackDeliveryModule);
