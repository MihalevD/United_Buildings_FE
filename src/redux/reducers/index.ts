import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import kvartalReducer from './kvartaliReducer';
import locationReducer from './locationsReducer';
import typeReducer from './typesReducer';
import adFormReducer from './adFormReducer';
import apartmentsReducer from './apartmentsReducer';
import projectsReducer from './projectsReducer';
// Import other reducers here

const rootReducer = combineReducers({
  filters: filterReducer,
  locations: locationReducer,
  kvartals: kvartalReducer,
  types: typeReducer,
  adForm: adFormReducer,
  apartments: apartmentsReducer,
  projects: projectsReducer,
});

export default rootReducer;