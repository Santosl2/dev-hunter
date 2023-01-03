/* eslint-disable react/function-component-definition */
/* eslint-disable unused-imports/no-unused-vars */
import { forwardRef, ForwardRefRenderFunction } from "react";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";

import { customStyles } from "./Select.styles";
import { SelectProps } from "./Select.types";

const animatedComponents = makeAnimated();

const SelectBase: ForwardRefRenderFunction<unknown, SelectProps> = (
  {
    options,
    defaultValue,
    isMulti = false,
    placeholder = "Selecione...",
    onChange,
  },
  ref
) => {
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
};

export const Select = forwardRef(SelectBase);
