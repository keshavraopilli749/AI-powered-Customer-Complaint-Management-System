import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ allowedRoles }) => {
    const { user, token, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
    }

    // Unauthenticated users are redirected to login
    if (!token || !user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Role-based access check (if specific roles are required)
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    // Return child routes
    return <Outlet />;
};

export default ProtectedRoute;
