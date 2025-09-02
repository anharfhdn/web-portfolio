"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);

  const positions = useMemo(() => {
    const count = 5000;
    const radius = 1.2;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());
      
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 10;
      ref.current.rotation.y += delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
      <PointMaterial
        transparent
        color="#fff"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const StarsCanvas: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-auto fixed inset-0 z-[1] bg-[#111]" />;
  }

  return (
    <div className="w-full h-auto fixed inset-0 z-[1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
