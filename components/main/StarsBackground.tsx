"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const randomInSphere = (radius: number) => {
  let x = 0, y = 0, z = 0;
  do {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
    z = Math.random() * 2 - 1;
  } while (x*x + y*y + z*z > 1);
  return [x * radius, y * radius, z * radius];
};

const StarBackground = (props: any) => {
  const ref = useRef<any>();

  const positions = useMemo(() => {
    const count = 8000;
    const radius = 1.2;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const [x, y, z] = randomInSphere(radius);
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta / 8;
    ref.current.rotation.y += delta / 12;
    //ref.current.material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.4;
    ref.current.material.opacity = 0.3;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => (
  <div className="w-full h-auto fixed inset-0 z-[1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default StarsCanvas;

