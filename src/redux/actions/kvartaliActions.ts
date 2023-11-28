import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import {OptionType, transformKvartalData } from "../../hooks/filterHooks";
import { RootState } from "../../store";
import { generateApiUrl } from "../../hooks/useApiCall";

export const SET_KVARTALS = 'SET_KVARTALS';

export const GET_KVARTALS = 'GET_KVARTALS';

export const setKvartals = (kvartals?: OptionType[] | undefined) => ({
  type: SET_KVARTALS,
  payload: kvartals,
});

export const getKvartals = () => ({
    type: GET_KVARTALS,
});


export const asyncGetKvartals = (): ThunkAction<void, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      const response = await fetch(generateApiUrl('kvartali'));
      const data = await response.json();
      dispatch(setKvartals(transformKvartalData(data)));
    } catch (error) {
      console.error('Error fetching kvartals:', error);
    }
  };
};