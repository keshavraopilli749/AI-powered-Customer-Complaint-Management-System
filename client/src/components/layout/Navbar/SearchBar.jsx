import React from 'react';
import { Search } from 'lucide-react';
import styles from './navbar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <Search size={16} color="var(--color-text-muted)" />
      <input 
        type="text" 
        className={styles.searchInput} 
        placeholder="Search complaints, lot numbers..." 
      />
    </div>
  );
};

export default SearchBar;
