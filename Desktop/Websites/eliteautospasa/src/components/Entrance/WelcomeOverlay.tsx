import { motion } from 'framer-motion';
import styles from './Entrance.module.css';

type State = 'idle' | 'doorOpening' | 'fogBillowing' | 'reveal' | 'settled' | 'exiting';

interface Props {
  state: State;
  onGetStarted: () => void;
}

export default function WelcomeOverlay({ state, onGetStarted }: Props) {
  const visible =
    state === 'reveal' || state === 'settled' || state === 'exiting';

  return (
    <motion.div
      className={styles.overlayFrame}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className={styles.overlayInner}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          Welcome to a higher standard!
        </motion.h1>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <button className={styles.getStartedBtn} onClick={onGetStarted}>
            Get Started
          </button>
          <LogoSm />
        </motion.div>
      </div>
    </motion.div>
  );
}

function LogoSm() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          background: 'radial-gradient(circle at 30% 30%, #e0e0e0, #808080 60%, #404040)',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(192,192,192,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '18px',
          fontWeight: '700',
          letterSpacing: '0.05em',
          fontFamily: 'Oswald, sans-serif',
          textTransform: 'uppercase',
        }}
      >
        EAS
      </div>
      <span
        style={{
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#c0c0c0',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
        }}
      >
        ELITE AUTO SPA
      </span>
    </div>
  );
}