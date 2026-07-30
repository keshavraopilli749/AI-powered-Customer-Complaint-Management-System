import React from 'react';
import { Bell, Moon, Menu } from 'lucide-react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import styles from './navbar.module.css';

const Navbar = ({ toggleSidebar, isMobile }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
        {isMobile && (
          <button className={styles.iconBtn} onClick={toggleSidebar} aria-label="Open Menu">
            <Menu size={20} />
          </button>
        )}
        <h1 className={styles.pageTitle}>Dashboard</h1>
      </div>
      
      <div className={styles.rightSection}>
        <SearchBar />
        <button className={styles.iconBtn} aria-label="Toggle Theme">
          <Moon size={20} />
        </button>
        <button className={styles.iconBtn} aria-label="Notifications">
          <Bell size={20} />
        </button>
        <UserMenu />
      </div>
    </header>
  );
};

export default Navbar;
