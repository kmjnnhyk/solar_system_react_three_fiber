import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useGridHelperContext } from '../hooks/GridHelperContext';
import EarthOrbit from './EarthOrbit';
import SunMesh from './SunMesh';

export default function SolarSystem() {
  const { selectedOptions } = useGridHelperContext();
  const solarSystemRef = useRef(null);

  useFrame((state, delta) => {
    solarSystemRef.current.rotation.y += delta;
  });

  return (
    <group ref={solarSystemRef}>
      <SunMesh />
      <EarthOrbit />
      {selectedOptions.find((obj) => obj.name === 'solarSystem').isClicked && <gridHelper />}
    </group>
  );
}
