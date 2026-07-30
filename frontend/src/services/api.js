import axios from 'axios';
import { API_BASE_URL } from '../constants/apiEndpoints';

/**
 * Global Axios instance configured for the FastAPI backend.
 */
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000, // AI processing can take time, set a generous timeout
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Request Interceptor: Attach Auth tokens here in the future
api.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor: Global error logging or token refresh
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Could dispatch global error notifications here
        console.error("API Error intercepted:", error);
        return Promise.reject(error);
    }
);

export default api;
