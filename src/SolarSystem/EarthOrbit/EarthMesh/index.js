import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Planet from '../../../components/Planet';
import { useGridHelperContext } from '../../../hooks/GridHelperContext';

export default function EarthMesh() {
  const { selectedOptions } = useGridHelperContext();
  const earthRef = useRef(null);

  useFrame((state, delta) => {
    earthRef.current.rotation.y += delta;
  });

  return (
    <Planet scale={[1, 1, 1]} ref={earthRef} emissive={0x112244} color={0x2233ff}>
      {selectedOptions.find((obj) => obj.name === 'earthMesh').isClicked && <gridHelper />}
    </Planet>
  );
}
