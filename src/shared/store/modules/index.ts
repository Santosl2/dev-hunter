import { combineReducers } from "@reduxjs/toolkit";

import { FILTERS_SLICE_NAME } from "@/shared/constants";

import { reducer } from "./filters";

export const combinedReducer = combineReducers({
  [FILTERS_SLICE_NAME]: reducer,
});
