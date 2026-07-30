import React from 'react';
import { Activity } from 'lucide-react';
import clsx from 'clsx';
import styles from './insights.module.css';

const RiskCard = () => {
  return (
    <div className={styles.insightsCard}>
      <div className={styles.header}>
        <h3 className={styles.title}><Activity size={18} className={styles.icon} /> Risk Assessment</h3>
      </div>
      <div className={styles.riskGrid}>
        <div className={clsx(styles.riskBadge, styles.lowRisk)}>
          <span className={styles.riskLabel}>Patient Risk</span>
          <span className={styles.riskValue}>Low</span>
        </div>
        <div className={clsx(styles.riskBadge, styles.lowRisk)}>
          <span className={styles.riskLabel}>Business Risk</span>
          <span className={styles.riskValue}>Low</span>
        </div>
        <div className={clsx(styles.riskBadge, styles.lowRisk)}>
          <span className={styles.riskLabel}>Regulatory</span>
          <span className={styles.riskValue}>Low</span>
        </div>
      </div>
    </div>
  );
};

export default RiskCard;
