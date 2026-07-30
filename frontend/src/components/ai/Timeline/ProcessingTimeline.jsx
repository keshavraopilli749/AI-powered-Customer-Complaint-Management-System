import React from 'react';
import { Check, Loader, Circle } from 'lucide-react';
import clsx from 'clsx';
import styles from './timeline.module.css';

const Step = ({ title, status, time }) => {
  return (
    <div className={clsx(styles.step, styles[status])}>
      <div className={styles.iconWrapper}>
        {status === 'completed' && <Check size={14} />}
        {status === 'active' && <Loader size={14} className="spin" />}
        {status === 'pending' && <Circle size={10} fill="currentColor" />}
      </div>
      <div className={styles.content}>
        <span className={styles.stepTitle}>{title}</span>
        {time && <span className={styles.stepTime}>{time}</span>}
      </div>
    </div>
  );
};

const ProcessingTimeline = () => {
  return (
    <div className={styles.timelineCard}>
      <h3 className={styles.title}>AI Processing Status</h3>
      <div className={styles.timeline}>
        <Step title="Document Uploaded" status="completed" time="10:00 AM" />
        <Step title="OCR Text Extraction" status="completed" time="10:00 AM" />
        <Step title="Context Understanding" status="active" time="In Progress..." />
        <Step title="Entity Extraction" status="pending" />
        <Step title="Risk Analysis" status="pending" />
        <Step title="Ready for Review" status="pending" />
      </div>
    </div>
  );
};

export default ProcessingTimeline;
