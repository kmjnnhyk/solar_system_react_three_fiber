import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import SolarSystem from '../SolarSystem';

export default function ThreeCanvas() {
  const fov = 40;
  const aspect = 2;
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(0, 50, 0);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);

  return (
    <Canvas camera={camera}>
      <SolarSystem />
      <pointLight position={[0, 0, 0]} intensity={3} color="white" />
    </Canvas>
  );
}
