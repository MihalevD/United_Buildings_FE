import { SET_TYPES } from '../actions/typesActions';

const initialState: Location[] = [];

const typeReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_TYPES:
      return action.payload;
    default:
      return state;
  }
};

export default typeReducer;