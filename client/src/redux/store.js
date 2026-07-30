import { configureStore } from '@reduxjs/toolkit';
import complaintReducer from './slices/complaintSlice';
import aiReducer from './slices/aiSlice';
import uploadReducer from './slices/uploadSlice';
import dashboardReducer from './slices/dashboardSlice';

export const store = configureStore({
    reducer: {
        complaints: complaintReducer,
        ai: aiReducer,
        upload: uploadReducer,
        dashboard: dashboardReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});
