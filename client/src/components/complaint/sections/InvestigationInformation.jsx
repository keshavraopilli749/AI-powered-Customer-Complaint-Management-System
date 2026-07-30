import React from 'react';
import TextInput from '../fields/TextInput';
import TextArea from '../fields/TextArea';
import styles from './sections.module.css';

const InvestigationInformation = () => {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>4. Investigation Information (QA Only)</h3>
      </div>
      <div className={styles.grid}>
        <TextInput label="Assigned To" placeholder="Select QA Investigator" />
        <TextInput label="Department" placeholder="Quality Assurance" />
        <TextInput label="Investigation Status" placeholder="Pending" />
        
        <div className={styles.fullWidth}>
          <TextArea label="Investigation Notes" placeholder="Preliminary findings..." rows={4} />
        </div>
        
        <div className={styles.fullWidth}>
          <TextArea label="Root Cause (Placeholder)" placeholder="To be determined after lab analysis" rows={3} />
        </div>
        
        <div className={styles.fullWidth}>
          <TextArea label="CAPA (Placeholder)" placeholder="Corrective and Preventive Actions..." rows={3} />
        </div>
      </div>
    </div>
  );
};

export default InvestigationInformation;
