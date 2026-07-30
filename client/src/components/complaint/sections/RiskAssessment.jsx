import React from 'react';
import SelectInput from '../fields/SelectInput';
import styles from './sections.module.css';

const RiskAssessment = () => {
  const riskOptions = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' }
  ];

  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>5. Risk Assessment</h3>
      </div>
      <div className={styles.grid}>
        <SelectInput label="Patient Risk" options={riskOptions} />
        <SelectInput label="Business Risk" options={riskOptions} />
        <SelectInput label="Regulatory Impact" options={riskOptions} />
        
        <div className={styles.summaryBlock} style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
          <div className={styles.summaryLabel}>Overall Calculated Risk</div>
          <div className={styles.summaryValue}>Pending Assessment</div>
        </div>
        
        <div className={styles.summaryBlock} style={{ gridColumn: '1 / -1', backgroundColor: '#e6f4ea' }}>
          <div className={styles.summaryLabel}>AI Risk Recommendation Placeholder</div>
          <div className={styles.summaryValue} style={{ color: '#137333' }}>AI predicts Low Risk based on historical data.</div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
