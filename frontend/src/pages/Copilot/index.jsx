import React from 'react';
import { Content, PageHeader } from '@/components/layout';
import { AssistantPanel } from '@/components/ai';

const Copilot = () => {
  return (
    <>
      <PageHeader 
        title="AI Copilot" 
        subtitle="Intelligent processing and analysis of customer complaints."
      />
      <Content>
        <AssistantPanel />
      </Content>
    </>
  );
};

export default Copilot;
