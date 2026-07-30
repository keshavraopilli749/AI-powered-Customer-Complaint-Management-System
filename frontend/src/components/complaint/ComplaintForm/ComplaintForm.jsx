import React from 'react';
import CustomerInformation from '../sections/CustomerInformation';
import ProductInformation from '../sections/ProductInformation';
import ComplaintInformation from '../sections/ComplaintInformation';
import InvestigationInformation from '../sections/InvestigationInformation';
import RiskAssessment from '../sections/RiskAssessment';
import AttachmentSection from '../sections/AttachmentSection';
import ReviewSection from '../sections/ReviewSection';
import { Button } from '@/components/ui/Button';
import styles from './ComplaintForm.module.css';

const ComplaintForm = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.formWrapper} onSubmit={(e) => e.preventDefault()}>
        <CustomerInformation />
        <ProductInformation />
        <ComplaintInformation />
        <InvestigationInformation />
        <RiskAssessment />
        <AttachmentSection />
        <ReviewSection />
        
        <div className={styles.formActions}>
          <Button variant="ghost">Cancel</Button>
          <Button variant="outline">Save Draft</Button>
          <Button variant="primary">Submit Complaint</Button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
