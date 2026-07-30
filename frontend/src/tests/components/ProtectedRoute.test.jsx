import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import ProtectedRoute from '../../auth/ProtectedRoute';

// Mock the useAuth hook
vi.mock('../../auth/AuthProvider', () => ({
    useAuth: vi.fn()
}));

import { useAuth } from '../../auth/AuthProvider';

describe('ProtectedRoute Component', () => {

    it('shows loading state when auth is loading', () => {
        useAuth.mockReturnValue({ loading: true });
        
        render(
            <MemoryRouter>
                <ProtectedRoute />
            </MemoryRouter>
        );
        
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('redirects to login if user is not authenticated', () => {
        useAuth.mockReturnValue({ loading: false, user: null, token: null });
        
        render(
            <MemoryRouter initialEntries={['/protected']}>
                <Routes>
                    <Route path="/login" element={<div>Login Page</div>} />
                    <Route path="/protected" element={<ProtectedRoute />}>
                        <Route index element={<div>Protected Content</div>} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );
        
        expect(screen.getByText('Login Page')).toBeInTheDocument();
        expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });

    it('renders protected content if user is authenticated', () => {
        useAuth.mockReturnValue({ 
            loading: false, 
            user: { email: 'test@example.com', role: 'ADMIN' }, 
            token: 'valid.token.string' 
        });
        
        render(
            <MemoryRouter initialEntries={['/protected']}>
                <Routes>
                    <Route path="/login" element={<div>Login Page</div>} />
                    <Route path="/protected" element={<ProtectedRoute />}>
                        <Route index element={<div>Protected Content</div>} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );
        
        expect(screen.getByText('Protected Content')).toBeInTheDocument();
        expect(screen.queryByText('Login Page')).not.toBeInTheDocument();
    });
});
