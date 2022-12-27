import { PayloadAction } from "@reduxjs/toolkit";

export const filtersReducer = {
  addCategory: (state: any, action: PayloadAction<string>) => {
    return {
      ...state,
      categories: [...state.categories, action.payload],
    };
  },
  addSeniority: (state: any, action: PayloadAction<string>) => {
    return {
      ...state,
      seniorities: [...state.seniorities, action.payload],
    };
  },

  removeCategory: (state: any, action: PayloadAction<string>) => {
    const newCategories = state.categories.filter(
      (category: string) => category !== action.payload
    );

    return {
      ...state,
      categories: newCategories,
    };
  },

  removeSeniority: (state: any, action: PayloadAction<string>) => {
    const newSeniority = state.categories.filter(
      (seniority: string) => seniority !== action.payload
    );

    return {
      ...state,
      seniorities: newSeniority,
    };
  },
};
