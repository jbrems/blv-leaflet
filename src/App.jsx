import React, { useState } from 'react';
import Map from './Map';
import Controls from './Controls';

export default function App () {
  const [controls, setControls] = useState({});
  return <div style={{ position: 'relative' }}>
    <Map controls={controls} />
    <Controls onChange={setControls} />
  </div>;
}
