import { Apartment } from "../../hooks/apartmentHooks";
import { generateApiUrl } from "../../hooks/useApiCall";

export const SET_APARTMENTS = 'SET_APARTMENTS';
export const GET_APARTMENTS = 'GET_APARTMENTS';
export const SET_CHOSEN_APARTMENT = 'SET_CHOSEN_APARTMENT';
export const GET_CHOSEN_APARTMENT = 'GET_CHOSEN_APARTMENT';
export const SET_AD_APARTEMENTS = 'SET_AD_APARTEMENTS';
export const GET_AD_APARTEMENTS = 'GET_AD_APARTEMENTS';


export const setApartments = (apartments?: Apartment[] | undefined) => ({
  type: SET_APARTMENTS,
  payload: apartments,
});

export const getApartments = () => ({
  type: GET_APARTMENTS,
});

export const setChosenApartment = (apartment?: Apartment | null | undefined) => ({
  type: SET_CHOSEN_APARTMENT,
  payload: apartment,
});

export const getChosenApartment = () => ({
  type: GET_CHOSEN_APARTMENT,
});

export const setAdApartments = (apartments?: Apartment[] | undefined) => ({
  type: SET_AD_APARTEMENTS,
  payload: apartments,
});

export const getAdApartments = () => ({
  type: GET_AD_APARTEMENTS,
});


export const asyncGetChosenApartment = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(generateApiUrl('apartments', id));
      const data = await response.json();
      dispatch(setChosenApartment(data));
    } catch (error) {
      console.error('Error fetching chosen apartment:', error);
    }
  };
};

export const asyncGetApartments = () => {
  return async (dispatch: any) => {
    try {
      // Simulate an API call or replace with your actual fetch logic

      console.log('hello')

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



export const asyncGetAdApartments = () => {
  return async (dispatch: any) => {
    try {
      const queryParams = {
        filter: JSON.stringify([]),
        range: JSON.stringify([0, 9]),
        sort: JSON.stringify(['id', 'DESC']),
      } as any;
      const queryString = Object.keys(queryParams)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join('&');

      const response = await fetch(generateApiUrl('apartments', undefined, queryString));
      const data = await response.json();
      dispatch(setAdApartments(data));
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };
};
