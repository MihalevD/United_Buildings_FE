
import { SET_PROJECTS, GET_CHOSEN_PROJECT, SET_CHOSEN_PROJECT, GET_PROJECTS } from '../actions/projectActions';

const initialState: {
  projects?:any[] | undefined,
  chosenProject?:any | undefined,
} = {
  projects: [],
  chosenProject: null,
};

const projectsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case GET_PROJECTS:
    case GET_CHOSEN_PROJECT:
      return state;
    case SET_CHOSEN_PROJECT:
      console.log(action.payload);
      return {
        ...state,
        chosenProject: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;