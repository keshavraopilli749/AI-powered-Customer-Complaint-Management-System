import { useDispatch, useSelector } from 'react-redux';
import { uploadFile, resetUploadState } from '../redux/slices/uploadSlice';
import { useCallback } from 'react';

export const useUpload = () => {
    const dispatch = useDispatch();
    const { isUploading, progress, uploadedFileRef, error } = useSelector((state) => state.upload);

    const startUpload = useCallback(async (file) => {
        const resultAction = await dispatch(uploadFile(file));
        if (uploadFile.fulfilled.match(resultAction)) {
            return { success: true, fileRef: resultAction.payload };
        } else {
            return { success: false, error: resultAction.payload };
        }
    }, [dispatch]);

    const clearUploadState = useCallback(() => {
        dispatch(resetUploadState());
    }, [dispatch]);

    return {
        isUploading,
        progress,
        uploadedFileRef,
        error,
        startUpload,
        clearUploadState
    };
};
