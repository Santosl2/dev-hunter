import { createSlice } from "@reduxjs/toolkit";

import { MODALS_SLICE_NAME } from "@/shared/constants";
import { ModalStateProps } from "@/shared/interfaces/states";

import { modalReducers } from "./reducers";

const initialState: ModalStateProps = {
  isOpen: false,
  modalType: null,
};

const modalSlice = createSlice({
  name: MODALS_SLICE_NAME,
  initialState,
  reducers: modalReducers,
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
