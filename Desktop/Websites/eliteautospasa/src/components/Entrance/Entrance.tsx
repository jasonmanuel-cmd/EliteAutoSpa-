'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Entrance.module.css';
import GarageDoor from './GarageDoor';
import FogSystem from './FogSystem';
import SportsCar from './SportsCar';
import WelcomeOverlay from './WelcomeOverlay';

export type State = 'idle' | 'doorOpening' | 'fogBillowing' | 'reveal' | 'settled' | 'exiting';

export default function Entrance() {
  const [state, setState] = useState<State>('idle');
  const [exitOpacity, setExitOpacity] = useState(0);
  const exitingRef = useRef(false);

  const startEntrance = () => {
    if (state !== 'idle') return;
    setState('doorOpening');
    setTimeout(() => setState('fogBillowing'), 1500);
    setTimeout(() => setState('reveal'), 3200);
    setTimeout(() => setState('settled'), 4500);
  };

  const exit = () => {
    if (exitingRef.current || state === 'exiting') return;
    exitingRef.current = true;
    setState('exiting');
    let t = 0;
    const step = 20;
    const interval = setInterval(() => {
      t += step;
      setExitOpacity(Math.min(t / 700, 1));
      if (t >= 700) {
        clearInterval(interval);
        setExitOpacity(1);
        setTimeout(() => {
          document.body.style.overflow = '';
        }, 100);
      }
    }, step);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onFirstInteraction = () => {
      exit();
      window.removeEventListener('scroll', onFirstInteraction);
      window.removeEventListener('pointerdown', onFirstInteraction);
    };
    window.addEventListener('scroll', onFirstInteraction, { passive: true });
    window.addEventListener('pointerdown', onFirstInteraction, { once: true });
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('scroll', onFirstInteraction);
    };
  }, []);

  return (
    <div className={styles.entrance}>
      <AnimatePresence>
        {exitOpacity > 0 && (
          <motion.div
            className={styles.exitOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <Canvas
        className={styles.canvas}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ opacity: state === 'exiting' ? 1 - exitOpacity : 1 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        <GarageDoor state={state} />
        <FogSystem state={state} />
        <SportsCar state={state} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
        <directionalLight position={[-5, 3, -5]} intensity={0.6} color="#c0c0c0" />
        <pointLight position={[0, -2, 2]} intensity={0.3} color="#ffffff" />
      </Canvas>

      <WelcomeOverlay
        state={state}
        onGetStarted={exit}
      />

      <motion.button
        className={styles.startTrigger}
        initial={{ opacity: 1 }}
        animate={{ opacity: state !== 'idle' ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        onClick={startEntrance}
        aria-label="Start the experience"
      />
    </div>
  );
}
