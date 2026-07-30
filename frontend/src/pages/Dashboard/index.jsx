import React from 'react';
import { Content, PageHeader } from '@/components/layout';

const Dashboard = () => {
  return (
    <>
      <PageHeader 
        title="Dashboard" 
        subtitle="Overview of quality metrics and open complaints."
      />
      <Content>
        <div className="card">
          <h3>Welcome to the QMS Platform</h3>
          <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
            This is a placeholder for the dashboard widgets. We will implement charts and KPI cards here in Section 6.
          </p>
        </div>
      </Content>
    </>
  );
};

export default Dashboard;
