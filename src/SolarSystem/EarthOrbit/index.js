import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useGridHelperContext } from '../../hooks/GridHelperContext';
import EarthMesh from './EarthMesh';
import MoonMesh from './MoonMesh';

export default function EarthOrbit() {
  const { selectedOptions } = useGridHelperContext();
  const earthOrbitRef = useRef(null);

  useFrame((state, delta) => {
    earthOrbitRef.current.rotation.y += delta;
  });
  return (
    <group position={[10, 0, 0]} ref={earthOrbitRef}>
      <EarthMesh />
      <MoonMesh />
      {selectedOptions.find((obj) => obj.name === 'earthOrbit').isClicked && <gridHelper />}
    </group>
  );
}
