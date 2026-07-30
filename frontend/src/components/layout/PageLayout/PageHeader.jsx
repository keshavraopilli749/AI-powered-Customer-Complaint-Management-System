import React from 'react';
import Breadcrumb from '../Breadcrumb';
import styles from './layout.module.css';

const PageHeader = ({ title, subtitle, actions }) => {
  return (
    <div className={styles.pageHeader}>
      <Breadcrumb />
      <div className={styles.headerTop}>
        <div className={styles.titleArea}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.actionsArea}>
          {actions}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
