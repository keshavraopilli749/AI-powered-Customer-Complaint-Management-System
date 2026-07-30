import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: '',
    filters: {
        status: 'All',
        riskLevel: 'All',
        dateRange: 'Last 30 Days'
    },
    activeTab: 'overview', // overview, complaints, analytics
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setFilter: (state, action) => {
            const { key, value } = action.payload;
            state.filters[key] = value;
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        resetFilters: (state) => {
            state.filters = initialState.filters;
            state.searchQuery = '';
        }
    }
});

export const { setSearchQuery, setFilter, setActiveTab, resetFilters } = dashboardSlice.actions;
export default dashboardSlice.reducer;
