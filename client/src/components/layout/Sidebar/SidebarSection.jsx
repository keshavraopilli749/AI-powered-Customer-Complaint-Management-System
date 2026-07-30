import React from 'react';
import styles from './sidebar.module.css';

const SidebarSection = ({ title, children, isCollapsed }) => {
  return (
    <div className={styles.section}>
      {!isCollapsed && <div className={styles.sectionTitle}>{title}</div>}
      {children}
    </div>
  );
};

export default SidebarSection;
