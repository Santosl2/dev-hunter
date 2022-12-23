/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from "react";

import { Button as ButtonStyled } from "./Button.styles";
import { ButtonProps } from "./Button.types";

function IconElement({ icon }: { icon: React.ReactElement }) {
  return (
    <span className="mx-2">
      {React.cloneElement(icon, {
        size: 18,
      })}
    </span>
  );
}

export function Button({
  $variant = "blue",
  $size = "md",
  rounded = false,
  type = "button",
  iconLeft = null,
  iconRight = null,
  onClick,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyled
      type={type}
      $size={$size}
      $variant={$variant}
      rounded={rounded}
      onClick={onClick}
      {...props}
    >
      {iconLeft && <IconElement icon={iconLeft} />}
      {children}
      {iconRight && <IconElement icon={iconRight} />}
    </ButtonStyled>
  );
}
