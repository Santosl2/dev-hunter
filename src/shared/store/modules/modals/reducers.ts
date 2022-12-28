import { PayloadAction } from "@reduxjs/toolkit";

export const modalReducers = {
  openModal: (state: any, action: PayloadAction<string>) => {
    return {
      ...state,
      isOpen: true,
      modalType: action.payload,
    };
  },
  closeModal: (state: any) => {
    return {
      ...state,
      isOpen: false,
      modalType: null,
    };
  },
};
