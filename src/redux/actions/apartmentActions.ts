import { Apartment } from "../../hooks/apartmentHooks";
import { OptionType, transformLocationData } from "../../hooks/filterHooks";
import { generateApiUrl } from "../../hooks/useApiCall";

export const SET_APARTMENTS = 'SET_APARTMENTS';

export const GET_APARTMENTS = 'GET_APARTMENTS';

export const setApartments = (apartments?: Apartment[] | undefined) => ({
  type: SET_APARTMENTS,
  payload: apartments,
});

export const getApartments = () => ({
    type: GET_APARTMENTS,
});


export const asyncGetApartments = () => {
  return async (dispatch: any) => {
    try {
      // Simulate an API call or replace with your actual fetch logic

      const queryParams = {
        filter: JSON.stringify([]),
        range: JSON.stringify([0, 10]),
        sort: JSON.stringify(['id', 'ASC']),
      } as any;
      
      // Convert the queryParams object to a URL-encoded string
      const queryString = Object.keys(queryParams)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join('&');

      const response = await fetch(generateApiUrl('apartments', undefined, queryString));
      const data = await response.json();
      
      // Dispatch the setApartments action to update the state
      dispatch(setApartments(data));
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };
};