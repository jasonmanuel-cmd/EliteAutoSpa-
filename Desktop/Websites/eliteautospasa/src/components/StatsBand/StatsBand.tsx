import styles from './StatsBand.module.css';

export default function StatsBand() {
  return (
    <section className={styles.section} aria-label="Business statistics">
      <div className={styles.wrapper}>
        <div className={styles.band}>
          <span className={styles.labelBlock}>
            OVER
          </span>
          <span className={styles.number}>6,421</span>
          <span className={styles.labelBlock}>
            VEHICLES SERVICED
          </span>
        </div>
      </div>
    </section>
  );
}
