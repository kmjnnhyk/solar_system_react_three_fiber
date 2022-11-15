import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Planet from '../../../components/Planet';
import { useGridHelperContext } from '../../../hooks/GridHelperContext';

export default function MoonMesh() {
  const { selectedOptions } = useGridHelperContext();
  const moonMeshRef = useRef(null);

  useFrame((state, delta) => {
    moonMeshRef.current.rotation.y += delta;
  });

  return (
    <Planet position={[2, 0, 0]} scale={[0.5, 0.5, 0.5]} ref={moonMeshRef} emissive={0x222222} color={0x888888}>
      {selectedOptions.find((obj) => obj.name === 'moonMesh').isClicked && <gridHelper />}
    </Planet>
  );
}
