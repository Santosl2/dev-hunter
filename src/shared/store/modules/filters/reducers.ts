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
  addMobility: (state: any, action: PayloadAction<string>) => {
    return {
      ...state,
      mobilityTypes: action.payload,
    };
  },
  addContract: (state: any, action: PayloadAction<string>) => {
    return {
      ...state,
      contractTypes: action.payload,
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

  removeMobility: (state: any, action: PayloadAction<string>) => {
    return {
      ...state,
      mobilityTypes: "",
    };
  },

  removeContract: (state: any, action: PayloadAction<string>) => {
    return {
      ...state,
      contractTypes: "",
    };
  },
};
