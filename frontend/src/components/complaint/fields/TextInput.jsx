import React from 'react';
import styles from './fields.module.css';

const TextInput = ({ label, required, placeholder, type = 'text', helperText, error }) => {
  return (
    <div className={styles.fieldGroup}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input 
        type={type} 
        className={styles.input} 
        placeholder={placeholder}
      />
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      {error ? <span className={styles.errorText}>{error}</span> : <div className={styles.errorText}></div>}
    </div>
  );
};

export default TextInput;
