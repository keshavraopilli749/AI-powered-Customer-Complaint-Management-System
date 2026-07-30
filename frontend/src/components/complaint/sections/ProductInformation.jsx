import React from 'react';
import TextInput from '../fields/TextInput';
import SelectInput from '../fields/SelectInput';
import DateInput from '../fields/DateInput';
import { DOSAGE_FORMS } from '../constants/dropdownOptions';
import styles from './sections.module.css';

const ProductInformation = () => {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>2. Product Information</h3>
      </div>
      <div className={styles.grid}>
        <TextInput label="Product Name" required placeholder="Aspirin 500mg" />
        <TextInput label="Generic Name" placeholder="Acetylsalicylic acid" />
        <SelectInput label="Dosage Form" required options={DOSAGE_FORMS} />
        <TextInput label="Strength" placeholder="500mg" />
        
        <TextInput label="Batch / Lot Number" required placeholder="Enter Lot #" helperText="Critical for traceability" />
        <DateInput label="Manufacturing Date" />
        <DateInput label="Expiry Date" />
        
        <TextInput label="Manufacturing Site" placeholder="Plant A" />
        <TextInput label="Quantity Affected" type="number" placeholder="1" />
      </div>
    </div>
  );
};

export default ProductInformation;
