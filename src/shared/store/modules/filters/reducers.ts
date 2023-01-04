import { PayloadAction } from "@reduxjs/toolkit";

export const filtersReducer = {
  addSkill: (state: any, action: PayloadAction<number>) => {
    return {
      ...state,
      skills: action.payload,
    };
  },
  addSeniority: (state: any, action: PayloadAction<number>) => {
    return {
      ...state,
      seniorities: action.payload,
    };
  },

  removeCategory: (state: any, action: PayloadAction<number>) => {
    return {
      ...state,
      skills: 0,
    };
  },

  removeSeniority: (state: any, action: PayloadAction<number>) => {
    return {
      ...state,
      seniorities: 0,
    };
  },
};
