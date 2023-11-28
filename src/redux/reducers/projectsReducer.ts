
import { SET_PROJECTS } from '../actions/projectActions';

const initialState: any[] = [];

const projectsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};

export default projectsReducer;