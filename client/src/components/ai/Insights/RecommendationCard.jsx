import React from 'react';
import { Lightbulb } from 'lucide-react';
import styles from './insights.module.css';

const RecommendationCard = () => {
  return (
    <div className={styles.insightsCard}>
      <div className={styles.header}>
        <h3 className={styles.title}><Lightbulb size={18} className={styles.infoIcon} /> Recommendations</h3>
      </div>
      <div className={styles.recList}>
        <div className={styles.recItem}>
          <strong>Suggested Action:</strong> Request the customer to provide the Batch/Lot number from the bottom of the bottle.
        </div>
        <div className={styles.recItem}>
          <strong>Investigation:</strong> Route to Packaging QA for torque test review on capping machine.
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
