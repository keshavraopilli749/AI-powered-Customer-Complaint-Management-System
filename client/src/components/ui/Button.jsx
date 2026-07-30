import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  return (
    <button className={clsx(styles.btn, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
