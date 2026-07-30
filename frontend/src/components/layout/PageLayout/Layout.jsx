import React, { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import styles from './layout.module.css';

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={styles.layoutWrapper}>
      <Sidebar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      
      <div className={styles.mainWrapper}>
        <Navbar toggleSidebar={toggleCollapse} isMobile={isMobile} />
        
        <main className={styles.contentArea}>
          <Suspense fallback={<div className="flex-center" style={{ height: '100%' }}>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
