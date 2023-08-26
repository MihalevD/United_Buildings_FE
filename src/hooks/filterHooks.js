import useApiCall from "./useApiCall";

const useGetLocations = () => {
  return useApiCall("https://localhost:3000/locations");
};

const useGetPriceRanges = () => {
  return useApiCall("http://localhost:3000/prices");
};

const useGetTypes = () => {
  return useApiCall("http://localhost:3000/types");
};

const usePostLocation = () => {
  const postLocation = (locationData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
    };

    return useApiCall("http://localhost:3000/locations", options);
  };

  return postLocation;
};

const usePostTypes = () => {
  const postTypes = (typesData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(typesData),
    };

    return useApiCall("http://localhost:3000/types", options);
  };

  return postTypes;
};

const usePostPriceRange = () => {
  const postPriceRange = (priceRangeData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(priceRangeData),
    };

    return useApiCall("http://localhost:3000/prices", options);
  };

  return postPriceRange;
};

//update and delete hooks

const useUpdateLocation = () => {
  const updateLocation = (locationId, updatedData) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    };
    return useApiCall(`http://localhost:3000/locations/${locationId}`, options);
  };
  return updateLocation;
};

const useUpdateTypes = () => {
  const updateTypes = (typesId, updatedData) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    };
    return useApiCall(`http://localhost:3000/types/${typesId}`, options);
  };
  return updateTypes;
};

const useUpdatePriceRange = () => {
  const updatePriceRange = (priceRangeId, updatedData) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    };
    return useApiCall(`http://localhost:3000/prices/${priceRangeId}`, options);
  };
  return updatePriceRange;
};

const useDeleteLocation = () => {
  const deleteLocation = (locationId) => {
    const options = {
      method: "DELETE",
    };
    return useApiCall(`http://localhost:3000/locations/${locationId}`, options);
  };
  return deleteLocation;
};

const useDeleteTypes = () => {
  const deleteTypes = (typesId) => {
    const options = {
      method: "DELETE",
    };

    return useApiCall(`http://localhost:3000/types/${typesId}`, options);
  };
  return deleteTypes;
};

const useDeletePriceRange = () => {
  const deletePriceRange = (priceRangeId) => {
    const options = {
      method: "DELETE",
    };
    return useApiCall(`http://localhost:3000/prices/${priceRangeId}`, options);
  };
  return deletePriceRange;
};

export {
  useGetLocations,
  useGetPriceRanges,
  useGetTypes,
  usePostLocation,
  usePostTypes,
  usePostPriceRange,
  useUpdateLocation,
  useUpdateTypes,
  useUpdatePriceRange,
  useDeleteLocation,
  useDeleteTypes,
};
