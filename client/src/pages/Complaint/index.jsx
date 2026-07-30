import React from 'react';
import { Content, PageHeader } from '@/components/layout';
import { ComplaintForm } from '@/components/complaint';

const Complaint = () => {
  return (
    <>
      <PageHeader 
        title="Customer Complaint Intake" 
        subtitle="Log a new product quality complaint or adverse event."
      />
      <Content>
        <ComplaintForm />
      </Content>
    </>
  );
};

export default Complaint;
