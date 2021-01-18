import React from 'react';
import { useTracking } from 'react-tracking';

export default function App({ children }) {
  const { Track } = useTracking({}, { dispatch: data => window.myCustomDataLayer.push(data) });

  return <Track>{children}</Track>;
}