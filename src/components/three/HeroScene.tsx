"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { FloatingParticles } from "./FloatingParticles";
import { GoldMesh } from "./GoldMesh";

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} color="#F9F5ED" />
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.8}
            color="#C9A96E"
          />
          <FloatingParticles count={250} />
          <GoldMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
