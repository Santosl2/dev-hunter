/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from "react";

import { Button as ButtonStyled } from "./Button.styles";
import { ButtonProps } from "./Button.types";

function IconElement({
  icon,
  pos,
}: {
  icon: React.ReactElement;
  pos: "right" | "left";
}) {
  return (
    <span className="mx-2">
      {React.cloneElement(icon, {
        size: 18,
        "data-testid": `icon-${pos}`,
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
      {iconLeft && <IconElement icon={iconLeft} pos="left" />}
      {children}
      {iconRight && <IconElement icon={iconRight} pos="right" />}
    </ButtonStyled>
  );
}
