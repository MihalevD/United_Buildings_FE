import useApiCall from "./useApiCall";

const useGetApartments = (page) => {
  const url = `http://localhost:3000/apartments?page=${page}`;
  return useApiCall(url);
};

const useGetSingleApartment = (apartmentId) => {
  return useApiCall(`http://localhost:3000/apartments/${apartmentId}`);
};

const usePostApartment = () => {
  const postApartment = (apartmentData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apartmentData),
    };

    return useApiCall("http://localhost:3000/apartments", options);
  };

  return postApartment;
};

const useUpdateApartment = () => {
  const updateApartment = (apartmentId, updatedData) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    };

    return useApiCall(
      `http://localhost:3000/apartments/${apartmentId}`,
      options
    );
  };

  return updateApartment;
};

const useDeleteApartment = () => {
  const deleteApartment = (apartmentId) => {
    const options = {
      method: "DELETE",
    };

    return useApiCall(
      `http://localhost:3000/apartments/${apartmentId}`,
      options
    );
  };

  return deleteApartment;
};

export {
  useGetApartments,
  usePostApartment,
  useUpdateApartment,
  useDeleteApartment,
  useGetSingleApartment,
};
