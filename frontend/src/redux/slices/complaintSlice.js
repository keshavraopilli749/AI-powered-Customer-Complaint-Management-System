import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { complaintService } from '../../services/complaintService';
import { handleApiError } from '../../utils/errorHandler';

// Async Thunks
export const fetchComplaints = createAsyncThunk(
    'complaints/fetchComplaints',
    async (params, { rejectWithValue }) => {
        try {
            const response = await complaintService.getComplaints(params);
            return response.data; // data contains PaginatedResponse format
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

export const createComplaint = createAsyncThunk(
    'complaints/createComplaint',
    async (complaintData, { rejectWithValue }) => {
        try {
            const response = await complaintService.createComplaint(complaintData);
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

const complaintSlice = createSlice({
    name: 'complaints',
    initialState: {
        list: [],
        total: 0,
        page: 1,
        pageSize: 10,
        totalPages: 0,
        loading: false,
        error: null,
        currentComplaint: null
    },
    reducers: {
        setCurrentComplaint: (state, action) => {
            state.currentComplaint = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch List
            .addCase(fetchComplaints.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchComplaints.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload.items;
                state.total = action.payload.total;
                state.page = action.payload.page;
                state.pageSize = action.payload.size;
                state.totalPages = action.payload.pages;
            })
            .addCase(fetchComplaints.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            // Create
            .addCase(createComplaint.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createComplaint.fulfilled, (state, action) => {
                state.loading = false;
                state.list.unshift(action.payload); // Optimistic UI
                state.total += 1;
            })
            .addCase(createComplaint.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    }
});

export const { setCurrentComplaint, clearError } = complaintSlice.actions;
export default complaintSlice.reducer;
