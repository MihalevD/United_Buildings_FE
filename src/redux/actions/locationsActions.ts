import { OptionType, transformLocationData } from "../../hooks/filterHooks";
import { generateApiUrl } from "../../hooks/useApiCall";

export const SET_LOCATIONS = 'SET_LOCATIONS';

export const GET_LOCATIONS = 'GET_LOCATIONS';

export const setLocations = (locations?: OptionType[] | undefined) => ({
  type: SET_LOCATIONS,
  payload: locations,
});

export const getLocations = () => ({
    type: GET_LOCATIONS,
});


export const asyncGetLocations = () => {
  return async (dispatch: any) => {
    try {
      // Simulate an API call or replace with your actual fetch logic
      const response = await fetch(generateApiUrl('locations'));
      const data = await response.json();
      
      // Dispatch the setLocations action to update the state
      dispatch(setLocations(transformLocationData(data)));
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };
};