import { HTMLAttributes } from "react";

export type ButtonVariants = "blue" | "green" | "dark" | "github";

export type Variant = {
  $variant?: ButtonVariants;
};

export type ButtonCustomProps = Variant & {
  rounded?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
};

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonCustomProps;

export type ButtonStylesVariantObject = Record<ButtonVariants, string>;
