'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type State = 'idle' | 'doorOpening' | 'fogBillowing' | 'reveal' | 'settled' | 'exiting';

interface GarageDoorProps {
  state: State;
}

export default function GarageDoor({ state }: GarageDoorProps) {
  const leftRef = useRef<THREE.Group>(null);
  const rightRef = useRef<THREE.Group>(null);
  const [prog, setProg] = useState(0);

  useFrame((_, delta) => {
    if (!leftRef.current || !rightRef.current) return;

    let target = 0;
    if (state === 'doorOpening') target = 1;
    else if (state === 'fogBillowing') target = 1;
    else if (state === 'reveal') target = 1;
    else if (state === 'settled') target = 1;
    else if (state === 'exiting') target = 1;

    if (target > prog) {
      setProg(Math.min(prog + delta * 0.45, 1));
    }
  });

  const half = 3.6;
  const height = 3.2;
  const thickness = 0.08;
  const inset = 0.3;

  const leftX = -half + (thickness / 2) + inset;
  const rightX = half - (thickness / 2) - inset;

  const leftOpenX = -half * 0.4;
  const rightOpenX = half * 0.4;

  const lX = THREE.MathUtils.lerp(leftX, leftOpenX, prog);
  const rX = THREE.MathUtils.lerp(rightX, rightOpenX, prog);

  return (
    <group>
      <mesh ref={leftRef} position={[lX, 0, 0]}>
        <boxGeometry args={[thickness, height, 0.6]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
      <mesh ref={rightRef} position={[rX, 0, 0]}>
        <boxGeometry args={[thickness, height, 0.6]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}
