import tw from "tailwind-styled-components";

import {
  ButtonCustomProps,
  ButtonStylesSizeObject,
  ButtonStylesVariantObject,
} from "./Button.types";

export const ButtonModifiers: ButtonStylesVariantObject = {
  blue: "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  green:
    "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
  yellow:
    "bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-300",
  dark: "bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
  github:
    "bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:ring-[#24292F]/50 px-5 py-2.5 text-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30",
  linkedin:
    "bg-[#0077B7] hover:bg-[#0077B7]/90 focus:ring-4 focus:ring-[#0077B7]/50 px-5 py-2.5 text-center dark:focus:ring-gray-500 dark:hover:bg-[#0077B7]/30",
};

const SizeModifiers: ButtonStylesSizeObject = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

export const Button = tw.button<ButtonCustomProps>`
    text-white
    font-medium 
    text-sm
    px-5 
    py-2.5 
    focus:outline-none
    rounded-sm
     inline-flex 
     items-center
     gap-2
    
    disabled:opacity-75 disabled:cursor-not-allowed

    ${({ $rounded }) => $rounded && "rounded-full"}
    ${({ $variant }) => $variant && ButtonModifiers[$variant]}
    ${({ $size }) => $size && SizeModifiers[$size]}
`;
