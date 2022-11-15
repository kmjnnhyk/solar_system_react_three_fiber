import React, { forwardRef } from 'react';

const R = 1;
const SEG_WIDTH = 6;
const SEG_HEIGHT = 6;

const Planet = forwardRef((props, ref) => {
  return (
    <mesh position={props.position} scale={props.scale} ref={ref}>
      <sphereGeometry args={[R, SEG_WIDTH, SEG_HEIGHT]} />
      <meshPhongMaterial emissive={props.emissive} color={props.color} />
      {props.children}
    </mesh>
  );
});

export default Planet;
