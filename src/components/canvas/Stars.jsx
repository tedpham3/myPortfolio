import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const StarsCanvas = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
    </Canvas>
  );
};

export default StarsCanvas;
