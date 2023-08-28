interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
}

const useApiCall = <T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      resolve({ data: responseData, error: null });
    } catch (err) {
      resolve({ data: null, error: err as Error });
    }
  });
};

const handleApiResponse = async <T>(apiCall: Promise<ApiResponse<T>>) => {
  const response = await apiCall;
  if (response.data) {
    return response.data;
  } else {
    throw response.error;
  }
};


const handleApiMutation = async <T>(mutation: Promise<ApiResponse<T>>) => {
  const response = await mutation;
  if (response.data) {
    return response.data;
  } else if (response.error) {
    throw new Error(response.error.message); // Convert the error message to a string
  } else {
    throw new Error('An unexpected error occurred.');
  }
};

const generateApiUrl = (endpoint: string, id?: number) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const baseUrl = isProduction ? 'https://api.example.com' : 'http://localhost:3000';
  if (id !== undefined) {
    return `${baseUrl}/${endpoint}/${id}`;
  }
  return `${baseUrl}/${endpoint}`;
};




export {useApiCall, handleApiResponse, handleApiMutation, generateApiUrl};
