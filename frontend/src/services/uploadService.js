import api from './api';
import { ENDPOINTS } from '../constants/apiEndpoints';

export const uploadService = {
    /**
     * Upload a document for processing.
     * @param {File} file 
     * @param {Function} onUploadProgress - Callback for Axios progress event
     */
    uploadDocument: async (file, onUploadProgress) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await api.post(ENDPOINTS.UPLOAD, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress
        });
        
        return response.data;
    }
};
