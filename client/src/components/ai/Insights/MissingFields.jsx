import React from 'react';
import { AlertTriangle } from 'lucide-react';
import styles from './insights.module.css';

const MissingFields = () => {
  return (
    <div className={styles.insightsCard}>
      <div className={styles.header}>
        <h3 className={styles.title}><AlertTriangle size={18} className={styles.warningIcon} /> Missing Information</h3>
      </div>
      <div className={styles.missingList}>
        <div className={styles.missingItem}>
          <AlertTriangle size={16} className={styles.warningIcon} />
          Missing Batch / Lot Number
        </div>
        <div className={styles.missingItem}>
          <AlertTriangle size={16} className={styles.warningIcon} />
          Missing Phone Number
        </div>
      </div>
    </div>
  );
};

export default MissingFields;
