'use client';

import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF, Environment } from '@react-three/drei';
import type { State } from './Entrance';

interface SportsCarProps {
  state: State;
}

export default function SportsCar({ state }: SportsCarProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [visible, setVisible] = useState(false);
  const [dur, setDur] = useState(0);

  const gltf = useGLTF('/images/3d/sports-car.glb', true);

  useEffect(() => {
    if (state === 'reveal' || state === 'settled') {
      setVisible(true);
      setDur(0);
    } else {
      setVisible(false);
    }
  }, [state]);

  useFrame((_, delta) => {
    if (!groupRef.current || state !== 'settled' && state !== 'reveal') return;
    setDur(d => d + delta);
    groupRef.current.rotation.y = dur * 0.15;
  });

  if (!gltf.scene) {
    return (
      <group ref={groupRef} visible={visible} scale={1.6}>
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[2.2, 0.4, 1.0]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.7, -0.15]}>
          <boxGeometry args={[1.2, 0.35, 0.9]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.85} roughness={0.25} />
        </mesh>
        <mesh position={[0.9, 0.35, 0]}>
          <boxGeometry args={[0.3, 0.35, 0.95]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-1.05, 0.4, 0.3]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#fff5cc" emissive="#fff5cc" emissiveIntensity={2} />
        </mesh>
        <mesh position={[-1.05, 0.4, -0.3]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#fff5cc" emissive="#fff5cc" emissiveIntensity={2} />
        </mesh>
        {[
          [-0.7, 0.15, 0.6],
          [-0.7, 0.15, -0.6],
          [0.7, 0.15, 0.6],
          [0.7, 0.15, -0.6],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.18, 32]} />
            <meshStandardMaterial color="#111" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <group ref={groupRef} visible={visible} position={[0, -0.2, -1.5]}>
      <primitive object={gltf.scene} />
      <Environment preset="studio" />
    </group>
  );
}
