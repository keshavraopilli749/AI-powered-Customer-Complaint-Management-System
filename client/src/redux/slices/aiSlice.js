import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { aiService } from '../../services/aiService';
import { handleApiError } from '../../utils/errorHandler';
import { mapAIResponseToForm } from '../../utils/responseMapper';

export const processDocumentWithAI = createAsyncThunk(
    'ai/processDocument',
    async (documentData, { rejectWithValue }) => {
        try {
            const response = await aiService.processDocument(documentData);
            return response.data; // The DocumentState from LangGraph
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

const aiSlice = createSlice({
    name: 'ai',
    initialState: {
        isProcessing: false,
        extractedData: null,
        mappedFormData: null, // Ready to fill the QMS form
        summary: null,
        risks: null,
        recommendations: null,
        missingFields: [],
        validationErrors: [],
        error: null,
        progressMessage: '' // Can be updated to "Extracting...", "Assessing Risk..."
    },
    reducers: {
        resetAIState: (state) => {
            state.isProcessing = false;
            state.extractedData = null;
            state.mappedFormData = null;
            state.summary = null;
            state.risks = null;
            state.recommendations = null;
            state.missingFields = [];
            state.validationErrors = [];
            state.error = null;
            state.progressMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(processDocumentWithAI.pending, (state) => {
                state.isProcessing = true;
                state.error = null;
                state.progressMessage = 'AI is analyzing the document...';
            })
            .addCase(processDocumentWithAI.fulfilled, (state, action) => {
                const payload = action.payload;
                state.isProcessing = false;
                state.progressMessage = 'Analysis Complete';
                
                state.extractedData = payload.extracted_data;
                state.mappedFormData = mapAIResponseToForm(payload);
                
                state.summary = payload.summary;
                state.risks = {
                    patient: payload.patient_risk,
                    business: payload.business_risk,
                    regulatory: payload.regulatory_risk,
                    overall: payload.overall_risk
                };
                state.recommendations = {
                    rootCause: payload.root_cause_suggestion,
                    capa: payload.capa_suggestion
                };
                
                state.missingFields = payload.missing_fields || [];
                state.validationErrors = payload.validation_errors || [];
            })
            .addCase(processDocumentWithAI.rejected, (state, action) => {
                state.isProcessing = false;
                state.error = action.payload.message;
                state.progressMessage = 'Analysis Failed';
            });
    }
});

export const { resetAIState } = aiSlice.actions;
export default aiSlice.reducer;
