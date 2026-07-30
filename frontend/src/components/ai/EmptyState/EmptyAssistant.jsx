import React from 'react';
import { Sparkles } from 'lucide-react';

const EmptyAssistant = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      minHeight: '400px',
      color: 'var(--color-text-muted)',
      textAlign: 'center'
    }}>
      <Sparkles size={48} style={{ color: 'var(--color-border)', marginBottom: '1rem' }} />
      <h3 style={{ color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>AI Copilot is Ready</h3>
      <p style={{ maxWidth: '300px' }}>
        Upload a customer complaint email or PDF to begin AI extraction and analysis.
      </p>
    </div>
  );
};

export default EmptyAssistant;
