/* eslint-disable import/no-cycle */
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
