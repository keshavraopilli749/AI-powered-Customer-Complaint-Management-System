import React from 'react';
import styles from './fields.module.css';

const TextArea = ({ label, required, placeholder, helperText, error, rows = 4 }) => {
  return (
    <div className={styles.fieldGroup}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea 
        className={styles.textarea} 
        rows={rows}
        placeholder={placeholder}
      />
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      {error ? <span className={styles.errorText}>{error}</span> : <div className={styles.errorText}></div>}
    </div>
  );
};

export default TextArea;
