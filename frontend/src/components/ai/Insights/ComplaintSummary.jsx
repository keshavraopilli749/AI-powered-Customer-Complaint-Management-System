import React from 'react';
import { AlignLeft } from 'lucide-react';
import styles from './insights.module.css';

const ComplaintSummary = () => {
  return (
    <div className={styles.insightsCard}>
      <div className={styles.header}>
        <h3 className={styles.title}><AlignLeft size={18} className={styles.icon} /> Executive Summary</h3>
      </div>
      <div className={styles.summaryText}>
        A customer reported finding a broken seal on a bottle of Aspirin 500mg. 
        The product was not consumed. This appears to be a packaging defect 
        potentially originating from the manufacturing site or during transit.
      </div>
    </div>
  );
};

export default ComplaintSummary;
