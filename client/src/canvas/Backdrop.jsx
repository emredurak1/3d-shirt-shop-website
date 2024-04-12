import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      temporal
      alphaTest={0.75}
      scale={12}
      rotation={[Math.PI / 2, 0, 0]}
      frames={60}
      ref={shadows}
      position={[0, 0, -0.14]}
      opacity={0.4}
      enabled={false}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={2}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={2}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
