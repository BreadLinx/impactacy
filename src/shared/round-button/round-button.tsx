import * as S from "./styles";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ ...buttonProps }) => {
  return <S.Button {...buttonProps} />;
};
