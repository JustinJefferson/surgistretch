import { requireNativeView } from 'expo';
import * as React from 'react';

import { AssetPackDeliveryViewProps } from './AssetPackDelivery.types';

const NativeView: React.ComponentType<AssetPackDeliveryViewProps> =
  requireNativeView('AssetPackDelivery');

export default function AssetPackDeliveryView(props: AssetPackDeliveryViewProps) {
  return <NativeView {...props} />;
}
