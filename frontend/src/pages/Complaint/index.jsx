import React from 'react';
import { Content, PageHeader } from '@/components/layout';
import { Button } from '@/components/ui/Button';

const Complaint = () => {
  return (
    <>
      <PageHeader 
        title="Customer Complaint" 
        subtitle="Create or edit a product quality complaint."
        actions={<Button variant="primary">Save Draft</Button>}
      />
      <Content>
        <div className="card">
          <p style={{ color: 'var(--color-text-muted)' }}>
            This is a placeholder for the Complaint Form. We will build the actual form in Section 4.
          </p>
        </div>
      </Content>
    </>
  );
};

export default Complaint;
