// Action Types
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CHANGE_FILTER = 'CHANGE_FILTER';

// Action Creators
export const addFilter = (filter: any) => ({
  type: ADD_FILTER,
  payload: filter,
});

export const changeFilter = (filter: any) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export const removeFilter = (filter: any) => ({
  type: REMOVE_FILTER,
  payload: filter,
});