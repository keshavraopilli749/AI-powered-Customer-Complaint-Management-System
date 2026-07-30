import api from './api';
import { ENDPOINTS } from '../constants/apiEndpoints';

export const aiService = {
    /**
     * Triggers the AI pipeline (LangGraph + Groq) to extract structured JSON 
     * from the raw text/document.
     * @param {string|File} payload - Text or file reference
     */
    processDocument: async (payload) => {
        const response = await api.post(ENDPOINTS.AI_EXTRACT, { document: payload });
        return response.data;
    }
};
