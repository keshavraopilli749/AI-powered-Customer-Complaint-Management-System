import React from 'react';
import { FileText } from 'lucide-react';
import styles from './extraction.module.css';

const ExtractedFields = () => {
  return (
    <div className={styles.extractionCard}>
      <div className={styles.header}>
        <h3 className={styles.title}><FileText size={18} className={styles.icon} /> Extracted Data</h3>
      </div>
      
      <div className={styles.fieldList}>
        <div className={styles.fieldItem}>
          <div>
            <div className={styles.fieldLabel}>Customer Name</div>
            <div className={styles.fieldValue}>John Doe</div>
          </div>
        </div>
        <div className={styles.fieldItem}>
          <div>
            <div className={styles.fieldLabel}>Product</div>
            <div className={styles.fieldValue}>Aspirin 500mg</div>
          </div>
        </div>
        <div className={styles.fieldItem} style={{ borderLeftColor: 'var(--color-warning)' }}>
          <div>
            <div className={styles.fieldLabel}>Batch / Lot Number</div>
            <div className={styles.fieldValue}>Not Found</div>
          </div>
        </div>
        <div className={styles.fieldItem}>
          <div>
            <div className={styles.fieldLabel}>Complaint Category</div>
            <div className={styles.fieldValue}>Packaging Defect</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtractedFields;
