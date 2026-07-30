import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import moduleStyles from './GlobalLayout.module.css';

const GlobalLayout = () => {
  return (
    <div className={moduleStyles.layoutWrapper}>
      <aside className={moduleStyles.sidebar}>
        {/* Sidebar Placeholder */}
        <div style={{ padding: '1rem', color: 'white' }}>Sidebar Placeholder</div>
      </aside>
      <div className={moduleStyles.mainContent}>
        <header className={moduleStyles.topNavbar}>
          {/* Navbar Placeholder */}
          <div style={{ padding: '1rem' }}>Top Navbar Placeholder</div>
        </header>
        <main className={moduleStyles.pageArea}>
          <Suspense fallback={<div className="flex-center" style={{ height: '100%' }}>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer className={moduleStyles.footer}>
          {/* Footer Placeholder */}
          <div style={{ padding: '1rem', fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} AI QMS System
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GlobalLayout;
