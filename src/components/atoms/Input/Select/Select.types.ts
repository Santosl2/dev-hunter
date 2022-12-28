type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: Option[];
  defaultValue?: any;
  isMulti?: boolean;
  placeholder?: string;

  onChange: (value: any) => void;
};
