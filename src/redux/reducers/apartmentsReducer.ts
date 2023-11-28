import { Apartment } from '../../hooks/apartmentHooks';
import { SET_APARTMENTS } from '../actions/apartmentActions';

const initialState: Apartment[] = [];

const apartmentsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_APARTMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default apartmentsReducer;