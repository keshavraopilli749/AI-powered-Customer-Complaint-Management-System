import React from 'react';
import styles from './layout.module.css';

const Content = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      {children}
    </div>
  );
};

export default Content;
