import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OptionType } from '../../hooks/filterHooks';

export interface FormState {
    formBuy: boolean;
    inputValues: {
      name: string;
      phone: string;
      email: string;
      type: OptionType;
      place: OptionType;
      kvartal: OptionType;
    };
  }
  
  const initialState: FormState = {
    formBuy: false,
    inputValues: {
      name: '',
      phone: '',
      email: '',
      type: undefined as any,
      place: undefined as any,
      kvartal: undefined as any,
    },
  };
  
  const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      setFormBuy: (state, action: PayloadAction<boolean>) => {
        state.formBuy = action.payload;
      },
      setFilters: (state, action: PayloadAction<FormState['inputValues']>) => {
        state.inputValues = action.payload;
      },
      clearFilters: (state) => {
        state.inputValues = initialState.inputValues;
      },
      setInputValue: (
        state,
        action: PayloadAction<{ field: keyof FormState['inputValues']; value: any }>
      ) => {
        console.log(action.payload, 'PAYLOAD');
        state.inputValues[action.payload.field] = action.payload.value;
      },
    },
  });
  
  export const { setFormBuy, setFilters, clearFilters, setInputValue } = formSlice.actions;
  export default formSlice.reducer;