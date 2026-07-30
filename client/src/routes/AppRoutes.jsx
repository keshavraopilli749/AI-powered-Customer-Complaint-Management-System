import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalLayout } from '@/components/layout';
import ProtectedRoute from '@/auth/ProtectedRoute';
import Login from '@/pages/Login/Login';

// Lazy load pages for performance
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Complaint = lazy(() => import('@/pages/Complaint'));
const Copilot = lazy(() => import('@/pages/Copilot'));
const Settings = lazy(() => import('@/pages/Settings'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route element={<GlobalLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="complaint/:id" element={<Complaint />} />
            <Route path="complaint/new" element={<Complaint />} />
            <Route path="copilot" element={<Copilot />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
