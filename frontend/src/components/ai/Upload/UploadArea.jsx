import React from 'react';
import { UploadCloud } from 'lucide-react';
import styles from './upload.module.css';

const UploadArea = ({ onUpload }) => {
  return (
    <div className={styles.uploadCard}>
      <h3 className={styles.title}>Upload Complaint Document</h3>
      <div className={styles.dropzone} onClick={onUpload}>
        <UploadCloud size={40} className={styles.icon} />
        <div className={styles.text}>
          <strong>Click to browse</strong> or drag file here
        </div>
        <div className={styles.subtext}>
          Supports PDF, JPG, PNG, MSG, EML (Max 20MB)
        </div>
      </div>
    </div>
  );
};

export default UploadArea;
