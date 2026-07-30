import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { uploadService } from '../../services/uploadService';
import { handleApiError } from '../../utils/errorHandler';

export const uploadFile = createAsyncThunk(
    'upload/uploadFile',
    async (file, { rejectWithValue, dispatch }) => {
        try {
            // Note: In Redux Thunks, tracking upload progress requires custom config
            // For simplicity in this demo, we mock progress or just await the result.
            const response = await uploadService.uploadDocument(file, (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                dispatch(setUploadProgress(percentCompleted));
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

const uploadSlice = createSlice({
    name: 'upload',
    initialState: {
        isUploading: false,
        progress: 0,
        uploadedFileRef: null,
        error: null
    },
    reducers: {
        setUploadProgress: (state, action) => {
            state.progress = action.payload;
        },
        resetUploadState: (state) => {
            state.isUploading = false;
            state.progress = 0;
            state.uploadedFileRef = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadFile.pending, (state) => {
                state.isUploading = true;
                state.error = null;
                state.progress = 0;
            })
            .addCase(uploadFile.fulfilled, (state, action) => {
                state.isUploading = false;
                state.progress = 100;
                state.uploadedFileRef = action.payload; // backend file id/path
            })
            .addCase(uploadFile.rejected, (state, action) => {
                state.isUploading = false;
                state.error = action.payload.message;
            });
    }
});

export const { setUploadProgress, resetUploadState } = uploadSlice.actions;
export default uploadSlice.reducer;
