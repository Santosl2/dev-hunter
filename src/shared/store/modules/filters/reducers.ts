import { PayloadAction } from "@reduxjs/toolkit";

export const filtersReducer = {
  addSkill: (state: any, action: PayloadAction<string>) => {
    return {
      ...state,
      skills: [...state.skills, action.payload],
    };
  },
  addSeniority: (state: any, action: PayloadAction<string>) => {
    return {
      ...state,
      seniorities: [...state.seniorities, action.payload],
    };
  },

  removeCategory: (state: any, action: PayloadAction<string>) => {
    const newCategories = state.skills.filter(
      (category: string) => category !== action.payload
    );

    return {
      ...state,
      skills: newCategories,
    };
  },

  removeSeniority: (state: any, action: PayloadAction<string>) => {
    const newSeniority = state.skills.filter(
      (seniority: string) => seniority !== action.payload
    );

    return {
      ...state,
      seniorities: newSeniority,
    };
  },
};
