import { OptionType, transformLocationData } from "../../hooks/filterHooks";
import { generateApiUrl } from "../../hooks/useApiCall";

export const SET_PROJECTS = 'SET_PROJECTS';

export const GET_PROJECTS = 'GET_PROJECTS';

export const setProjects = (projects?:any[] | undefined) => ({
  type: SET_PROJECTS,
  payload: projects,
});

export const getProject = () => ({
    type: GET_PROJECTS,
});


export const asyncGetProjects = () => {
  return async (dispatch: any) => {
    try {
      // Simulate an API call or replace with your actual fetch logic
      const response = await fetch(generateApiUrl('projects'));
      const data = await response.json();
      
      // Dispatch the setProjects action to update the state
      dispatch(setProjects(data));
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };
};