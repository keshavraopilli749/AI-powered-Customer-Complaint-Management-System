import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  LayoutDashboard, 
  FileWarning, 
  Bot, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Menu,
  Stethoscope
} from 'lucide-react';
import clsx from 'clsx';
import SidebarItem from './SidebarItem';
import SidebarSection from './SidebarSection';
import styles from './sidebar.module.css';

// We will dispatch to uiSlice later, for now we will just use a local state or a prop if passed.
// Wait, the prompt says "Do not build Redux logic", so let's use local state for the collapse toggle in the Layout itself, or just inside Sidebar if it manages itself.
// Actually, global layout needs to know if it's collapsed to adjust main content. We will pass `isCollapsed` and `toggleCollapse` as props.

const Sidebar = ({ isCollapsed, toggleCollapse }) => {
  return (
    <aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
      <div className={styles.header}>
        <div className={styles.logoArea}>
          <Stethoscope className={styles.logoIcon} size={28} />
          <span className={styles.appName}>QMS Platform</span>
        </div>
        <button className={styles.toggleBtn} onClick={toggleCollapse} aria-label="Toggle Sidebar">
          <Menu size={20} />
        </button>
      </div>

      <nav className={styles.nav}>
        <SidebarSection title="Main" isCollapsed={isCollapsed}>
          <SidebarItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" isCollapsed={isCollapsed} />
          <SidebarItem to="/complaint/new" icon={FileWarning} label="Customer Complaints" isCollapsed={isCollapsed} />
        </SidebarSection>
        
        <SidebarSection title="Intelligence" isCollapsed={isCollapsed}>
          <SidebarItem to="/copilot" icon={Bot} label="AI Copilot" isCollapsed={isCollapsed} />
          <SidebarItem to="/reports" icon={BarChart3} label="Reports" isCollapsed={isCollapsed} />
        </SidebarSection>
        
        <div style={{ flexGrow: 1 }} />

        <SidebarSection title="System" isCollapsed={isCollapsed}>
          <SidebarItem to="/settings" icon={Settings} label="Settings" isCollapsed={isCollapsed} />
          <SidebarItem to="/help" icon={HelpCircle} label="Help" isCollapsed={isCollapsed} />
        </SidebarSection>
      </nav>
    </aside>
  );
};

export default Sidebar;
