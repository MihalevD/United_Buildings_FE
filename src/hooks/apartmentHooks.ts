import {handleApiMutation, handleApiResponse, useApiCall, generateApiUrl } from "./useApiCall";
import { useMutation } from 'react-query';

interface Apartment {
  id: number;
  // Add other properties as needed
}

// useGetApartments
const useGetApartments = (page: number) => {
  const url = generateApiUrl(`apartments?page=${page}`);
  return useApiCall<Apartment[]>(url);
};

// useGetSingleApartment
const useGetSingleApartment = (apartmentId: number) => {
  const url = generateApiUrl(`apartments`, apartmentId);
  return useApiCall<Apartment>(url);
};

// usePostApartment
const usePostApartment = () => {
  const mutation = useMutation<Apartment, Error, { apartmentData: any, imageFiles: File[] }>(async ({ apartmentData, imageFiles }) => {
    const formData = new FormData();

    formData.append("apartmentData", JSON.stringify(apartmentData));

    for (const imageFile of imageFiles) {
      formData.append("images", imageFile);
    }

    const options = {
      method: "POST",
      body: formData,
    };

    const url = generateApiUrl(`apartments`);
    return handleApiMutation<Apartment>(useApiCall<Apartment>(url, options));
  });

  return mutation;
};

// useUpdateApartment
const useUpdateApartment = () => {
  const mutation = useMutation<void, Error, { apartmentId: number, updatedData: any, imageFiles?: File[] }>(async ({ apartmentId, updatedData, imageFiles }) => {
    const formData = new FormData();
    formData.append("updatedData", JSON.stringify(updatedData));

    if (imageFiles) {
      for (const imageFile of imageFiles) {
        formData.append("images", imageFile);
      }
    }

    const options = {
      method: "PUT",
      body: formData,
    };

    const url = generateApiUrl(`apartments`, apartmentId);
    return handleApiMutation<void>(useApiCall<void>(url, options));
  });

  return mutation;
};

// useDeleteApartment
const useDeleteApartment = () => {
  const mutation = useMutation<void, Error, number>(async (apartmentId) => {
    const options = {
      method: "DELETE",
    };

    const url = generateApiUrl(`apartments`, apartmentId);
    return handleApiMutation<void>(useApiCall<void>(url, options));
  });

  return mutation;
};

export {
  useGetApartments,
  useGetSingleApartment,
  usePostApartment,
  useUpdateApartment,
  useDeleteApartment,
};
