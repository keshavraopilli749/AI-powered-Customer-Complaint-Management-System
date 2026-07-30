import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      height: '40px',
      backgroundColor: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-text-muted)',
      flexShrink: 0,
    }}>
      &copy; {new Date().getFullYear()} AI-powered QMS System. All rights reserved.
    </footer>
  );
};

export default Footer;
