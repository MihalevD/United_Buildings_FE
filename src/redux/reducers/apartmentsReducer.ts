import { SET_APARTMENTS, GET_APARTMENTS, SET_CHOSEN_APARTMENT, GET_CHOSEN_APARTMENT, SET_AD_APARTEMENTS, GET_AD_APARTEMENTS } from '../actions/apartmentActions';

const initialState = {
  apartments: [],
  chosenApartment: null,
  adApartments: [],
};

const apartmentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_APARTMENTS:
      return {
        ...state,
        apartments: action.payload,
      };
    case GET_APARTMENTS:
      return state;
    case SET_CHOSEN_APARTMENT:
      return {
        ...state,
        chosenApartment: action.payload,
      };
    case GET_CHOSEN_APARTMENT:
      return state;
    case SET_AD_APARTEMENTS:
      return {
        ...state,
        adApartments: action.payload,
      };
    case GET_AD_APARTEMENTS:
      return state;
    default:
      return state;
  }
};

export default apartmentsReducer;