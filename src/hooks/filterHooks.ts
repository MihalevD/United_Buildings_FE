import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import {useApiCall, handleApiResponse, handleApiMutation , generateApiUrl} from './useApiCall';

export interface Location {
  idlocations?: number;
  location_name?: string;
  image_url?: string;
}

export interface Type {
  idtypes?: number;
  type_name?: string;
}

export interface PriceRange {
  idprice_range?: number;
  top: Number;
  bottom: Number;
}

export interface Project {
  idprojects: number;
  project_name?: string;
  image_url?: string[];
}


export type OptionType = { label: string; value: string };


const transformPriceData = (data: PriceRange[]): OptionType[] => {
  return data.map((range) => ({
    label: `From ${range.bottom} to ${range.top}`,
    value: range.idprice_range ? range.idprice_range.toString() : '',
  }));
};

export function transformTypeData (data: Type[] | undefined): OptionType[] {
  if (!data) {
    return [];
  }
  return data.map((type) => ({
    label: type.type_name || '',
    value: type.idtypes ? type.idtypes.toString() : '', 
  }));
};

export function transformLocationData(data: Location[] | undefined): OptionType[] {
  if (!data) {
    return [];
  }

  return data.map((location) => ({
    label: location.location_name || '',
    value: location.idlocations ? location.idlocations.toString() : '',
  }));
}

export function transformProjectData(data: Project[] | undefined): OptionType[] {
  if (!data) {
    return [];
  }

  return data.map((project) => ({
    label: project.project_name || '',
    value: project.idprojects ? project.idprojects.toString() : '',
  }));
}

//useGetLocations
const useGetLocations = (resourceIds:any, options:any) => {
  const { data: locationData } = useQuery(
    `locations_${options.page}_${options.perPage}_${options.field}_${options.order}_${options.yourFilterField}`,
    () => handleApiResponse(useApiCall(generateApiUrl(`locations/${resourceIds.join(',')}`))),
    options
  );

  return { data: locationData };
};


// useGetPriceRanges
const useGetPriceRanges = ({ filtered = false, ...options } = {}) => {
  const { data: priceData } = useQuery<PriceRange[]>(
    'priceRanges',
    () => handleApiResponse<PriceRange[]>(useApiCall<PriceRange[]>(generateApiUrl('prices'))),
    options
  );

  let transformedData;
  if (filtered) {
    transformedData = priceData ? transformPriceData(priceData) : [];
  }

  return { data: filtered ? transformedData : priceData };
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

//useGetProjects
const useGetProjects = (options?: UseQueryOptions<Project[]>) => {
  const { data: projectData } = useQuery<Project[]>(
    'projects',
    () => handleApiResponse<Project[]>(useApiCall<Project[]>(generateApiUrl('projects'))),
    options
  );

  const transformedData = projectData ? transformProjectData(projectData) : [];

  return {data: transformedData};
};




// usePostLocation
const usePostLocation = () => {
  return useMutation<Location, Error, Location>(async (locationData) => {
    const response:any = await useApiCall(generateApiUrl('locations'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(locationData),
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return response.data[0];
  });
};

// usePostType
const usePostType = () => {
  return useMutation<Type, Error, Type>(async (typeData) => {
    console.log(typeData)
    const response =  await useApiCall(generateApiUrl('types'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      body: JSON.stringify(typeData),}
  });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return typeData;  
  });
};

// usePostPriceRange
const usePostPriceRange = () => {
  return useMutation<PriceRange, Error, PriceRange>(async (priceRangeData) => {
    const response = await useApiCall(generateApiUrl('prices'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(priceRangeData),
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return priceRangeData;
  });
};

// usePostProject
const usePostProject = () => {
  const mutation = useMutation<Project, Error, { project_name: any, imageFiles: File[] }>(async ({ project_name, imageFiles }) => {
    const formData = new FormData();
    formData.append("projectData", JSON.stringify({project_name}));

    // Wait for all image files to be processed before proceeding
    if (imageFiles) {
      for (const imageFile of imageFiles) {
        formData.append("images", imageFile);
      }
    }

    const options = {
      method: "POST",
      body: formData,
    };

    const url = generateApiUrl(`projects`);
    return handleApiMutation<Project>(useApiCall<Project>(url, options));
  });

  return mutation;
};


// useUpdateLocation
const useUpdateLocation = () => {
  return useMutation<Location[], Error, Location>(async (updatedData) => {
    return handleApiMutation<Location[]>(useApiCall(generateApiUrl('locations', updatedData.idlocations), {
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
  return useMutation<Type[], Error, Type>(async (updatedData) => {
    console.log(updatedData)
    return handleApiMutation<Type[]>(useApiCall(generateApiUrl('types', updatedData.idtypes), {
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
  return useMutation<PriceRange[], Error, PriceRange>(async (updatedData) => {
    return handleApiMutation<PriceRange[]>(useApiCall(generateApiUrl('prices', updatedData.idprice_range), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    }));
  });
};

const useUpdateProject = () => {
  const mutation = useMutation<Project, Error, { projectid: number, updatedData: any, imageFiles?: File[] }>(async ({ projectid, updatedData, imageFiles }) => {
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

    const url = generateApiUrl(`projects`, projectid);
    return handleApiMutation<Project>(useApiCall<Project>(url, options));
  });

  return mutation;
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

// useDeleteProject
const useDeleteProject = () => {
  const mutation = useMutation<void, Error, number>(async (idprojects) => {
    return handleApiMutation<void>(useApiCall(generateApiUrl('projects', idprojects), {
      method: 'DELETE',
    }));
  });
  return mutation;
};  

export {
  useGetLocations,
  useGetPriceRanges,
  useGetTypes,
  useGetProjects,
  usePostLocation,
  usePostType,
  usePostPriceRange,
  usePostProject,
  useUpdateLocation,
  useUpdateType,
  useUpdatePriceRange,
  useUpdateProject,
  useDeleteLocation,
  useDeleteType,
  useDeletePriceRange,
  useDeleteProject
};
