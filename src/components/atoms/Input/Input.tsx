/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import { forwardRef, ForwardRefRenderFunction } from "react";

import { InputProps } from "./Input.types";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, ...props },
  ref
) => {
  const borderColor = error ? "border-red-500" : "border-gray-300";

  return (
    <div>
      {label ? (
        <label
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      ) : null}

      <input
        ref={ref}
        className={`bg-gray-50 border ${borderColor} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        {...props}
      />

      {error ? (
        <span className="text-red-500 text-sm font-medium">{error}</span>
      ) : null}
    </div>
  );
};

export const Input = forwardRef(InputBase);
