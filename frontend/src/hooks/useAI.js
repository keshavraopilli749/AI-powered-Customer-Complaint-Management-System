import { useDispatch, useSelector } from 'react-redux';
import { processDocumentWithAI, resetAIState } from '../redux/slices/aiSlice';
import { useCallback } from 'react';

export const useAI = () => {
    const dispatch = useDispatch();
    const aiState = useSelector((state) => state.ai);

    const extractFromDocument = useCallback(async (documentData) => {
        const resultAction = await dispatch(processDocumentWithAI(documentData));
        if (processDocumentWithAI.fulfilled.match(resultAction)) {
            return { success: true, data: resultAction.payload };
        } else {
            return { success: false, error: resultAction.payload };
        }
    }, [dispatch]);

    const clearAIState = useCallback(() => {
        dispatch(resetAIState());
    }, [dispatch]);

    return {
        ...aiState,
        extractFromDocument,
        clearAIState
    };
};
