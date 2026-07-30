import { useDispatch, useSelector } from 'react-redux';
import { fetchComplaints, createComplaint, setCurrentComplaint, clearError } from '../redux/slices/complaintSlice';
import { useCallback } from 'react';

export const useComplaint = () => {
    const dispatch = useDispatch();
    const { list, total, page, pageSize, totalPages, loading, error, currentComplaint } = useSelector((state) => state.complaints);

    const getComplaints = useCallback((params) => {
        dispatch(fetchComplaints(params));
    }, [dispatch]);

    const saveComplaint = useCallback(async (complaintData) => {
        const resultAction = await dispatch(createComplaint(complaintData));
        if (createComplaint.fulfilled.match(resultAction)) {
            return { success: true, data: resultAction.payload };
        } else {
            return { success: false, error: resultAction.payload };
        }
    }, [dispatch]);

    const selectComplaint = useCallback((complaint) => {
        dispatch(setCurrentComplaint(complaint));
    }, [dispatch]);

    const resetError = useCallback(() => {
        dispatch(clearError());
    }, [dispatch]);

    return {
        list,
        total,
        page,
        pageSize,
        totalPages,
        loading,
        error,
        currentComplaint,
        getComplaints,
        saveComplaint,
        selectComplaint,
        resetError
    };
};
