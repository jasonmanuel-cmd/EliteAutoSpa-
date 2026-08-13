'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type State = 'idle' | 'doorOpening' | 'fogBillowing' | 'reveal' | 'settled' | 'exiting';

interface FogSystemProps {
  state: State;
}

const PARTICLE_COUNT = 1200;
const positions = new Float32Array(PARTICLE_COUNT * 3);
const velocities = new Float32Array(PARTICLE_COUNT * 3);

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  positions[i3]     = (Math.random() - 0.5) * 12;
  positions[i3 + 1] = (Math.random() - 0.5) * 8;
  positions[i3 + 2] = (Math.random() - 0.5) * 6 - 2;
  velocities[i3]     = (Math.random() - 0.5) * 0.02;
  velocities[i3 + 1] = (Math.random() * 0.04) + 0.01;
  velocities[i3 + 2] = (Math.random() * 0.02) + 0.005;
}

export default function FogSystem({ state }: FogSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    const isBillowing = state === 'fogBillowing' || state === 'reveal' || state === 'settled';
    if (isBillowing && !active) setActive(true);
    if (state === 'doorOpening') setActive(false);

    if (active) {
      setProgress(p => Math.min(p + delta * 0.25, 1));
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        positions[i3]     += velocities[i3] + Math.sin(Date.now() * 0.001 + i) * 0.002;
        positions[i3 + 1] += velocities[i3 + 1] * (1 + progress * 0.5);
        positions[i3 + 2] += velocities[i3 + 2];
        if (positions[i3 + 1] > 6) {
          positions[i3]     = (Math.random() - 0.5) * 12;
          positions[i3 + 1] = -3;
          positions[i3 + 2] = (Math.random() - 0.5) * 6 - 2;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        transparent
        opacity={active ? Math.min(0.55, progress * 0.7) : 0}
        color="#d0d0d0"
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
