import { Location } from '../../hooks/filterHooks';
import { SET_LOCATIONS } from '../actions/locationsActions';

const initialState: Location[] = [];

const locationReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;