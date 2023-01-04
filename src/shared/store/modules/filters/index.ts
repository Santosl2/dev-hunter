import { createSlice } from "@reduxjs/toolkit";

import { FILTERS_SLICE_NAME } from "@/shared/constants";
import { FiltersStateProps } from "@/shared/interfaces/states";

import { filtersReducer } from "./reducers";

const initialState: FiltersStateProps = {
  skills: "",
  seniorities: "",
  contractTypes: "",
};

const filtersSlice = createSlice({
  name: FILTERS_SLICE_NAME,
  initialState,
  reducers: filtersReducer,
});

export const { addSkill, addSeniority, removeCategory, removeSeniority } =
  filtersSlice.actions;
export const { reducer } = filtersSlice;
