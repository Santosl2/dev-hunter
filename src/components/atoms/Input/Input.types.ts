import { HTMLAttributes } from "react";

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  label?: string;
  type: string;
  error?: string;
  icon?: React.ReactElement;
  onValueChange?: (value: string) => void;
};

export type InputStyleProps = {
  $hasIcon?: boolean;
  $hasError?: boolean;
};

export type InputStylesVariantObject = Record<string, string>;
