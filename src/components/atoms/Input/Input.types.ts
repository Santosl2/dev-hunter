import { HTMLAttributes } from "react";

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  label?: string;
  type: string;
  error?: string;
};
