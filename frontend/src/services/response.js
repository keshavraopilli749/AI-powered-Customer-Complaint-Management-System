export const handleResponse = (response) => {
  return response.data;
};

export const handleError = (error) => {
  // Global error handling, e.g., redirect to login on 401
  if (error.response?.status === 401) {
    console.error('Unauthorized access - redirecting to login');
  }
  return Promise.reject(error);
};
