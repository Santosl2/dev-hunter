import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";

import { customStyles } from "./Select.styles";
import { SelectProps } from "./Select.types";

const animatedComponents = makeAnimated();

export function Select({
  options,
  defaultValue,
  isMulti = false,
  placeholder = "Selecione...",
  onChange,
}: SelectProps) {
  return (
    <ReactSelect
      closeMenuOnSelect={!isMulti}
      components={animatedComponents}
      defaultValue={defaultValue}
      isMulti={isMulti}
      styles={customStyles}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      data-testid="select"
    />
  );
}
