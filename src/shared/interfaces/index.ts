/* eslint-disable import/no-cycle */
import { CONTRACT_TYPES, MOBILITY_TYPES } from "../constants";
import { store } from "../store";
import "./states";

export type Colors =
  | "red"
  | "blue"
  | "yellow"
  | "green"
  | "light-blue"
  | "purple"
  | "pink"
  | "teal"
  | "emerald";

export type Categories = {
  id: number;
  title: string;
  color: Colors;
};

export type StoreType = typeof store;
type StateType = typeof store.getState;
export type AppState = ReturnType<StateType>;

export type ContractsTypes = typeof CONTRACT_TYPES[number]["label"];
export type LocationTypes = typeof MOBILITY_TYPES[number]["label"];

export type OptionProps = {
  value: string;
  label: string;
};
