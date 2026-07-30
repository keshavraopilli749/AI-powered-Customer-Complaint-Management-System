import React from 'react';
import styles from './sections.module.css';

const ReviewSection = () => {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>7. Review & Submit</h3>
      </div>
      
      <div className={styles.summaryBlock}>
        <div className={styles.summaryLabel}>Validation Status</div>
        <div className={styles.summaryValue} style={{ color: 'var(--color-warning)' }}>
          Please fill out all required fields before submission.
        </div>
      </div>
      
      <div className={styles.grid}>
        <div>
          <div className={styles.summaryLabel}>Entered Information Preview</div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            A read-only summary of the complaint data will appear here prior to electronic signature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
