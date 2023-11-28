import { OptionType, transformTypeData } from "../../hooks/filterHooks";
import { generateApiUrl } from "../../hooks/useApiCall";

export const SET_TYPES = 'SET_TYPES';

export const GET_TYPES = 'GET_TYPES';

export const setTypes = (types?: OptionType[] | undefined) => ({
  type: SET_TYPES,
  payload: types,
});

export const getLocations = () => ({
    type: GET_TYPES,
});



export const asyncGetTypes = () => {
  return async (dispatch:any) => {
    try {
      // Simulate an API call or replace with your actual fetch logic
      const response = await fetch(generateApiUrl('types'));
      const data = await response.json();
      
      // Dispatch the setTypes action to update the state
      dispatch(setTypes(transformTypeData(data)));
    } catch (error) {
      console.error('Error fetching types:', error);
    }
  };
};