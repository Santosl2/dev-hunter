import { OptionProps } from "@/shared/interfaces";

export type SelectProps = {
  options: OptionProps[];
  defaultValue?: any;
  isMulti?: boolean;
  placeholder?: string;

  onChange: (value: any) => void;
};
