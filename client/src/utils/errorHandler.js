/**
 * Standardizes API and network errors into user-friendly messages.
 */
export const handleApiError = (error) => {
    let errorMessage = "An unexpected error occurred.";
    let statusCode = 500;

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        statusCode = error.response.status;
        const data = error.response.data;

        if (data && data.message) {
            errorMessage = data.message;
        } else if (data && data.detail) {
            // FastAPI default validation error format
            if (Array.isArray(data.detail)) {
                errorMessage = data.detail.map(err => `${err.loc.join('.')}: ${err.msg}`).join(', ');
            } else {
                errorMessage = data.detail;
            }
        } else {
            errorMessage = `Server Error: ${statusCode}`;
        }
    } else if (error.request) {
        // The request was made but no response was received
        errorMessage = "No response from server. Please check your network connection.";
        statusCode = 0;
    } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = error.message;
    }

    return {
        message: errorMessage,
        status: statusCode,
        originalError: error
    };
};
