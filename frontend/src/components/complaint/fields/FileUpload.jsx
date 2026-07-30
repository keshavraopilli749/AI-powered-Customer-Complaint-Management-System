import React from 'react';
import { UploadCloud } from 'lucide-react';
import styles from './fields.module.css';

const FileUpload = ({ label, accept, helperText }) => {
  return (
    <div className={styles.fieldGroup}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.dropzone}>
        <UploadCloud size={32} className={styles.uploadIcon} />
        <div className={styles.uploadText}>
          <strong>Click to upload</strong> or drag and drop
        </div>
        <div className={styles.uploadSubtext}>
          {accept ? `Supported files: ${accept}` : 'All standard files supported (PDF, JPG, PNG, EML)'}
        </div>
      </div>
      {helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default FileUpload;
