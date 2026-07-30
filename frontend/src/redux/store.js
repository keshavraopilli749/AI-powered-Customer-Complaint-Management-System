import { configureStore } from '@reduxjs/toolkit';
import complaintReducer from './slices/complaintSlice';
import chatReducer from './slices/chatSlice';
import uploadReducer from './slices/uploadSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    complaint: complaintReducer,
    chat: chatReducer,
    upload: uploadReducer,
    ui: uiReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
