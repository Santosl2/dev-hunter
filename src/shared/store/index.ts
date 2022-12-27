/* eslint-disable import/no-cycle */
import { configureStore } from "@reduxjs/toolkit";

import { combinedReducer } from "./modules";

export const store = configureStore({
  reducer: combinedReducer,
});
