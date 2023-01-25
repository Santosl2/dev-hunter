/* eslint-disable react/function-component-definition */
import { forwardRef, ForwardRefRenderFunction } from "react";

import { TextareaProps } from "./Textarea.types";

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500  resize-none h-36"
    />
  );
};

export const Textarea = forwardRef(TextAreaBase);
