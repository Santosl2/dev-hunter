import tw from "tailwind-styled-components";

import { InputStyleProps, InputStylesVariantObject } from "./Input.types";

const InputModifiers: InputStylesVariantObject = {
  hasIcon: "pl-10",
  hasError: "border-red-500",
};

export const InputTW = tw.input<InputStyleProps>`
bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500

${({ $hasIcon }) => $hasIcon && InputModifiers.hasIcon}
${({ $hasError }) => $hasError && InputModifiers.hasError}
`;
