import { Kvartal } from '../../hooks/filterHooks';
import { SET_KVARTALS } from '../actions/kvartaliActions';

const initialState: Kvartal[] = [];

const kvartalReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_KVARTALS:
      return action.payload;
    default:
      return state;
  }
};

export default kvartalReducer;