/* eslint-disable import/no-cycle */
import { createSlice } from "@reduxjs/toolkit";

import { FILTERS_SLICE_NAME } from "@/shared/constants";
import { FiltersStateProps } from "@/shared/interfaces/states";

import { filtersReducer } from "./reducers";

const initialState: FiltersStateProps = {
  categories: [],
  seniorities: [],
  contractTypes: [],
};

const filtersSlice = createSlice({
  name: FILTERS_SLICE_NAME,
  initialState,
  reducers: filtersReducer,
});

export const { addCategory, addSeniority, removeCategory, removeSeniority } =
  filtersSlice.actions;
export const { reducer } = filtersSlice;
