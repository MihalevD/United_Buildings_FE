import { useApiCall, handleApiResponse, handleApiMutation, generateApiUrl } from "./useApiCall";
import { useQuery, UseQueryOptions, useMutation } from 'react-query';

interface User {
  id: number;
  username: string;
  // Add other properties as needed
}

// useGetUser
const useGetUser = (options?: UseQueryOptions<User[]>) => {
  return useQuery<User[]>(
    'users',
    () => handleApiResponse<User[]>(useApiCall<User[]>('http://localhost:3000/users')),
    options
  );
};

// usePostUser
const usePostUser = () => {
  return useMutation<void, Error, User>(async (userData) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('users', userData.id), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }));
  });
};

// useUpdateUser
const useUpdateUser = () => {
  return useMutation<void, Error, User>(async (updatedData) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('users', updatedData.id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    }));
  });
};

// useDeleteUser
const useDeleteUser = () => {
  return useMutation<void, Error, number>(async (userId) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('users', userId), {
      method: 'DELETE',
    }));
  });
};


export { useGetUser, usePostUser, useUpdateUser, useDeleteUser };