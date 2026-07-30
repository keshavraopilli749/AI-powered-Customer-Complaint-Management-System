import React from 'react';
import FileUpload from '../fields/FileUpload';
import styles from './sections.module.css';

const AttachmentSection = () => {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>6. Attachments & Evidence</h3>
      </div>
      <FileUpload 
        label="Upload Complaint Evidence" 
        accept=".pdf, .jpg, .png, .eml" 
        helperText="Attach customer emails, photos of the defect, or lab reports."
      />
      <div style={{ marginTop: '1rem', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
        No files uploaded yet. (File Preview Placeholder)
      </div>
    </div>
  );
};

export default AttachmentSection;
