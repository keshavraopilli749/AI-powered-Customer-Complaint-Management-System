import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUploading: false,
  progress: 0,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {},
});

export default uploadSlice.reducer;
