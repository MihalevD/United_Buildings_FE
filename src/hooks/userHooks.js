import useApiCall from "./useApiCall";

const useGetUser = () => {
  return useApiCall("http://localhost:3000/users");
};

const usePostUser = () => {
  const postUser = (userData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    return useApiCall("http://localhost:3000/users", options);
  };

  return postUser;
};

const useUpdateUser = () => {
  const updateApartment = (userId, updatedData) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    };

    return useApiCall(`http://localhost:3000/users/${userId}`, options);
  };

  return updateApartment;
};

const useDeleteUser = () => {
  const deleteUser = (userId) => {
    const options = {
      method: "DELETE",
    };

    return useApiCall(`http://localhost:3000/users/${userId}`, options);
  };

  return deleteUser;
};

export { useGetUser, usePostUser, useUpdateUser, useDeleteUser };
