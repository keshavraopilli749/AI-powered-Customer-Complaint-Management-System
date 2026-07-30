import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './navbar.module.css';

const UserMenu = () => {
  return (
    <div className={styles.userMenu}>
      <div className={styles.avatar}>QA</div>
      <div className={styles.userInfo}>
        <span className={styles.userName}>Jane Doe</span>
        <span className={styles.userRole}>QA Executive</span>
      </div>
      <ChevronDown size={16} color="var(--color-text-muted)" />
    </div>
  );
};

export default UserMenu;
