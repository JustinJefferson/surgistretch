import * as React from 'react';

import { AssetPackDeliveryViewProps } from './AssetPackDelivery.types';

export default function AssetPackDeliveryView(props: AssetPackDeliveryViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
