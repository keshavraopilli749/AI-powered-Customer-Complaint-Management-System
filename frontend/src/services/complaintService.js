import api from './api';
import { ENDPOINTS } from '../constants/apiEndpoints';

export const complaintService = {
    /**
     * Fetch a paginated list of complaints.
     */
    getComplaints: async (params = {}) => {
        // params: { page, page_size, search, status, sort_by }
        const response = await api.get(ENDPOINTS.COMPLAINTS, { params });
        return response.data;
    },

    /**
     * Get a single complaint by UUID.
     */
    getComplaintById: async (id) => {
        const response = await api.get(`${ENDPOINTS.COMPLAINTS}/${id}`);
        return response.data;
    },

    /**
     * Create a new complaint.
     */
    createComplaint: async (complaintData) => {
        const response = await api.post(ENDPOINTS.COMPLAINTS, complaintData);
        return response.data;
    },

    /**
     * Update an existing complaint.
     */
    updateComplaint: async (id, complaintData) => {
        const response = await api.put(`${ENDPOINTS.COMPLAINTS}/${id}`, complaintData);
        return response.data;
    },

    /**
     * Soft delete a complaint.
     */
    deleteComplaint: async (id) => {
        const response = await api.delete(`${ENDPOINTS.COMPLAINTS}/${id}`);
        return response.data;
    }
};
