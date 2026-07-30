import { configureStore } from '@reduxjs/toolkit';
import complaintReducer from './slices/complaintSlice';
import aiReducer from './slices/aiSlice';
import uploadReducer from './slices/uploadSlice';

export const store = configureStore({
    reducer: {
        complaints: complaintReducer,
        ai: aiReducer,
        upload: uploadReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Useful if passing File objects, though generally discouraged
    })
});
