import React from 'react';
import TextInput from '../fields/TextInput';
import SelectInput from '../fields/SelectInput';
import DateInput from '../fields/DateInput';
import { COMPLAINT_SOURCES } from '../constants/dropdownOptions';
import styles from './sections.module.css';

const CustomerInformation = () => {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>1. Customer / Reporter Information</h3>
      </div>
      <div className={styles.grid}>
        <TextInput label="Customer / Reporter Name" required placeholder="John Doe" />
        <TextInput label="Organization Name" placeholder="City Pharmacy" />
        <TextInput label="Email Address" required type="email" placeholder="john.doe@example.com" />
        <TextInput label="Phone Number" placeholder="+1 (555) 000-0000" />
        <TextInput label="Country of Origin" required placeholder="United States" />
        <SelectInput label="Complaint Source" required options={COMPLAINT_SOURCES} />
        <DateInput label="Complaint Received Date" required />
      </div>
    </div>
  );
};

export default CustomerInformation;
