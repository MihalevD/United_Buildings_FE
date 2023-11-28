import { OptionType } from "../../hooks/filterHooks";
import { ADD_FILTER, CHANGE_FILTER, REMOVE_FILTER } from "../actions/filterActions";

// Define types
interface FilterState {
    type: OptionType[];
    location: OptionType[];
    kvartal: OptionType[];
    priceRange: number[];
}

interface AddFilterAction {
  type: typeof ADD_FILTER;
  payload: {
    filterType: keyof FilterState;
    value: OptionType[];
  };
}

interface RemoveFilterAction {
  type: typeof REMOVE_FILTER;
  payload: {
    filterType: keyof FilterState;
    value: OptionType;
  };
}

interface ChangeFilterAction {
  type: typeof CHANGE_FILTER;
  payload: {
    filterType: keyof FilterState;
    value: OptionType[];
  };
}

type FilterActionTypes = AddFilterAction | RemoveFilterAction | ChangeFilterAction;

// Initial State
const initialState: FilterState = {
    type: [],
    location: [],
    kvartal: [],
    priceRange: [50,140],
};

// Reducer
const filtersReducer = (state: FilterState = initialState, action: FilterActionTypes): FilterState => {
  switch (action.type) {
    case ADD_FILTER:
      const { filterType } = action.payload;
      return {
        ...state,
          [action.payload.filterType]: [...state[filterType], ...action.payload.value],
      };

    case CHANGE_FILTER:
      const { filterType: filterTypeToChange } = action.payload;
      return {
        ...state,
          [filterTypeToChange]: [...action.payload.value],
      };

    case REMOVE_FILTER:
      const { filterType: filterTypeToRemove } = action.payload;
      if(filterTypeToRemove === 'priceRange') return {
        ...state,
          [filterTypeToRemove]: [],
      };
      return {
        ...state,
          [filterTypeToRemove]: state[filterTypeToRemove].filter(
            (filter: OptionType) => filter.label !== action.payload.value.label
          ),
      };
    default:
      return state;
  }
};

export default filtersReducer;
