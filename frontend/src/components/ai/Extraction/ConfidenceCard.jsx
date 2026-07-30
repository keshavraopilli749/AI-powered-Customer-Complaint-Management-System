import React from 'react';
import { ShieldCheck } from 'lucide-react';
import styles from './extraction.module.css';

const ConfidenceCard = () => {
  return (
    <div className={styles.extractionCard}>
      <div className={styles.header}>
        <h3 className={styles.title}><ShieldCheck size={18} className={styles.icon} /> AI Confidence</h3>
      </div>
      <div className={styles.confidenceWrapper}>
        <div className={styles.confidenceScore}>94%</div>
        <div className={styles.confidenceLabel}>
          High confidence in OCR extraction and classification.
        </div>
      </div>
    </div>
  );
};

export default ConfidenceCard;
