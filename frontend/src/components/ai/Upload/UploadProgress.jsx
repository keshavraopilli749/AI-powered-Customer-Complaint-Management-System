import React from 'react';
import styles from './upload.module.css';

const UploadProgress = () => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressHeader}>
        <span className={styles.filename}>customer_email_complaint.pdf</span>
        <span className={styles.status}>Processing (60%)</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill}></div>
      </div>
    </div>
  );
};

export default UploadProgress;
