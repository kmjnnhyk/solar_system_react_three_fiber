import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Planet from '../../components/Planet';
import { useGridHelperContext } from '../../hooks/GridHelperContext';

export default function SunMesh() {
  const { selectedOptions } = useGridHelperContext();
  const sunMeshRef = useRef(null);

  useFrame((state, delta) => {
    sunMeshRef.current.rotation.y += delta;
  });

  return (
    <Planet ref={sunMeshRef} scale={[5, 5, 5]} emissive={0xffff00}>
      {selectedOptions.find((obj) => obj.name === 'sunMesh').isClicked && <gridHelper />}
    </Planet>
  );
}
