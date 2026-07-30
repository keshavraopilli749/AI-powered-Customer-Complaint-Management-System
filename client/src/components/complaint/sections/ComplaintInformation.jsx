import React from 'react';
import TextInput from '../fields/TextInput';
import SelectInput from '../fields/SelectInput';
import DateInput from '../fields/DateInput';
import TextArea from '../fields/TextArea';
import { COMPLAINT_CATEGORIES, SEVERITY_LEVELS } from '../constants/dropdownOptions';
import styles from './sections.module.css';

const ComplaintInformation = () => {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>3. Complaint Details</h3>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.fullWidth}>
          <TextInput label="Complaint Title" required placeholder="Short summary of the issue (e.g., Broken seal on bottle)" />
        </div>
        
        <SelectInput label="Complaint Category" required options={COMPLAINT_CATEGORIES} />
        <SelectInput label="Initial Severity" required options={SEVERITY_LEVELS} helperText="Subject to QA review" />
        
        <DateInput label="Date of Occurrence" />
        <DateInput label="Date Reported to Company" required />
        
        <div className={styles.fullWidth}>
          <TextArea 
            label="Detailed Complaint Description" 
            required 
            placeholder="Provide a full narrative of the complaint as reported by the customer..." 
            rows={6}
          />
        </div>
      </div>
    </div>
  );
};

export default ComplaintInformation;
