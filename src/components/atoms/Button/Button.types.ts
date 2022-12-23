import { HTMLAttributes } from "react";

export type ButtonVariants = "blue" | "green" | "dark" | "github";
export type ButtonSizes = "sm" | "md" | "lg";

export type VariantAndSize = {
  $variant?: ButtonVariants;
  $size?: ButtonSizes;
};

export type ButtonCustomProps = VariantAndSize & {
  rounded?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
};

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonCustomProps;

export type ButtonStylesVariantObject = Record<ButtonVariants, string>;
export type ButtonStylesSizeObject = Record<ButtonSizes, string>;
