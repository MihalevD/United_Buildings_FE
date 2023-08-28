import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
import {useApiCall, handleApiResponse, handleApiMutation , generateApiUrl} from './useApiCall';

interface Location {
  idlocations: number;
  location_name?: string;
  image_url?: string;
}

interface Type {
  idtypes: number;
  type_name?: string;
}

interface PriceRange {
  idprice_range: number;
  top: Number;
  bottom: Number;
}

type OptionType = { label: string; value: string };


const transformPriceData = (data: PriceRange[]): OptionType[] => {
  return data.map((range) => ({
    label: `From ${range.bottom} to ${range.top}`,
    value: range.idprice_range ? range.idprice_range.toString() : '',
  }));
};

const transformTypeData = (data: Type[]): OptionType[] => {
  return data.map((type) => ({
    label: type.type_name || '',
    value: type.idtypes ? type.idtypes.toString() : '', 
  }));
};

const transformLocationData = (data: Location[]): OptionType[] => {
  return data.map((location) => ({
    label: location.location_name || '',
    value: location.idlocations ? location.idlocations.toString() : '',
  }));
};

//useGetLocations
const useGetLocations = (options?: UseQueryOptions<Location[]>) => {
  const { data: locationData } = useQuery<Location[]>(
    'locations',
    () => handleApiResponse<Location[]>(useApiCall<Location[]>(generateApiUrl('locations'))),
    options
  );

  const transformedData = locationData ? transformLocationData(locationData) : [];

  return {data: transformedData};
};

// useGetPriceRanges
const useGetPriceRanges = (options?: UseQueryOptions<PriceRange[]>) => {
  const { data: priceData } = useQuery<PriceRange[]>(
    'priceRanges',
    () => handleApiResponse<PriceRange[]>(useApiCall<PriceRange[]>(generateApiUrl('prices'))),
    options
  );

  const transformedData = priceData ? transformPriceData(priceData) : [];

  return {data: transformedData};
};

// useGetTypes
const useGetTypes = (options?: UseQueryOptions<Type[]>) => {
  const { data: typeData } = useQuery<Type[]>(
    'types',
    () => handleApiResponse<Type[]>(useApiCall<Type[]>(generateApiUrl('types'))),
    options
  );

  const transformedData = typeData ? transformTypeData(typeData) : [];

  return {data: transformedData};
};



// usePostLocation
const usePostLocation = () => {
  return useMutation<Location, Error, Location>(async (locationData) => {
    const response = await useApiCall(generateApiUrl('locations'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(locationData),
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return locationData;
  });
};

// usePostType
const usePostType = () => {
  return useMutation<void, Error, Type>(async (typeData) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('types'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(typeData),
    }));
  });
};

// usePostPriceRange
const usePostPriceRange = () => {
  return useMutation<void, Error, PriceRange>(async (priceRangeData) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('prices'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(priceRangeData),
    }));
  });
};

// useUpdateLocation
const useUpdateLocation = () => {
  return useMutation<void, Error, Location>(async (updatedData) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('locations', updatedData.idlocations), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    }));
  });
};

// useUpdateType
const useUpdateType = () => {
  return useMutation<void, Error, Type>(async (updatedData) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('types', updatedData.idtypes), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    }));
  });
};

// useUpdatePriceRange
const useUpdatePriceRange = () => {
  return useMutation<void, Error, PriceRange>(async (updatedData) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('prices', updatedData.idprice_range), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    }));
  });
};

// useDeleteLocation
const useDeleteLocation = () => {
  return useMutation<void, Error, number>(async (locationId) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('locations', locationId), {
      method: 'DELETE',
    }));
  });
};

// useDeleteType
const useDeleteType = () => {
  return useMutation<void, Error, number>(async (typeId) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('types', typeId), {
      method: 'DELETE',
    }));
  });
};

// useDeletePriceRange
const useDeletePriceRange = () => {
  return useMutation<void, Error, number>(async (priceRangeId) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('prices', priceRangeId), {
      method: 'DELETE',
    }));
  });
};

export {
  useGetLocations,
  useGetPriceRanges,
  useGetTypes,
  usePostLocation,
  usePostType,
  usePostPriceRange,
  useUpdateLocation,
  useUpdateType,
  useUpdatePriceRange,
  useDeleteLocation,
  useDeleteType,
  useDeletePriceRange,
};
