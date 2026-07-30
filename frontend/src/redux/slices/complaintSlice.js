import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  complaints: [],
  activeComplaint: null,
  loading: false,
  error: null,
};

const complaintSlice = createSlice({
  name: 'complaint',
  initialState,
  reducers: {
    // Reducers go here
  },
});

export default complaintSlice.reducer;
