/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import { forwardRef, ForwardRefRenderFunction } from "react";

import { InputTW } from "./Input.styles";
import { InputProps } from "./Input.types";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, icon, onValueChange, ...props },
  ref
) => {
  const hasIcon = !!icon;
  const hasError = !!error;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(e.target.value);
  };

  return (
    <>
      {!!label && (
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <div className="relative mb-6">
        {!!hasIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}

        <InputTW
          ref={ref}
          {...props}
          $hasIcon={hasIcon}
          $hasError={hasError}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export const Input = forwardRef(InputBase);
