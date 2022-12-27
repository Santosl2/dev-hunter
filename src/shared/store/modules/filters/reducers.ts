/* eslint-disable import/no-cycle */
import { PayloadAction } from "@reduxjs/toolkit";

import { StateType } from "@/shared/interfaces";

export const filtersReducer = {
  addCategory: (state: StateType, action: PayloadAction<string>) => {
    return {
      ...state,
      categories: [...state.categories, action.payload],
    };
  },
  addSeniority: (state: StateType, action: PayloadAction<string>) => {
    return {
      ...state,
      seniorities: [...state.seniorities, action.payload],
    };
  },

  removeCategory: (state: StateType, action: PayloadAction<string>) => {
    const newCategories = state.categories.filter(
      (category: string) => category !== action.payload
    );

    return {
      ...state,
      categories: newCategories,
    };
  },

  removeSeniority: (state: StateType, action: PayloadAction<string>) => {
    const newSeniority = state.categories.filter(
      (seniority: string) => seniority !== action.payload
    );

    return {
      ...state,
      seniorities: newSeniority,
    };
  },
};
