import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './sidebar.module.css';

const SidebarItem = ({ to, icon: Icon, label, isCollapsed }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(styles.navItem, isActive && styles.active)
      }
      title={isCollapsed ? label : undefined}
    >
      <div className={styles.icon}>
        {Icon && <Icon size={20} />}
      </div>
      <span className={styles.label}>{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
