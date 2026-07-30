import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalLayout } from '@/components/layout';

// Lazy load pages for performance
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Complaint = lazy(() => import('@/pages/Complaint'));
const Copilot = lazy(() => import('@/pages/Copilot'));
const Settings = lazy(() => import('@/pages/Settings'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="complaint/:id" element={<Complaint />} />
        <Route path="complaint/new" element={<Complaint />} />
        <Route path="copilot" element={<Copilot />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
