import React, { ReactChildren } from "react";
import { Button as ButtonSCP } from "./styled";

interface ButtonProps {
  children:
    | ChildNode
    | JSX.Element
    | string
    | Array<JSX.Element | string | HTMLElement>
    | HTMLElement;
  wd: string;
  bckColor?: string;
  color?: string;
  jContent?: string;
}
export default function Button({
  children,
  wd,
  bckColor,
  color,
  jContent,
}: ButtonProps): JSX.Element {
  return (
    <ButtonSCP wd={wd} bckColor={bckColor} color={color} jContent={jContent}>
      {children}
    </ButtonSCP>
  );
}
