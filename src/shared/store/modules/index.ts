import { combineReducers } from "@reduxjs/toolkit";

import { FILTERS_SLICE_NAME, MODALS_SLICE_NAME } from "@/shared/constants";

import { reducer } from "./filters";
import { modalReducer } from "./modals";

export const combinedReducer = combineReducers({
  [FILTERS_SLICE_NAME]: reducer,
  [MODALS_SLICE_NAME]: modalReducer,
});
