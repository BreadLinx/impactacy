import * as S from "./styles";
import { ButtonHTMLAttributes, FC, ReactElement } from "react";

interface AccountLinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
  text: string;
}

export const AccountLinkButton: FC<AccountLinkButtonProps> = ({
  icon,
  text,
  ...rest
}) => {
  return (
    <S.Button {...rest}>
      {icon}
      <strong>{text}</strong>
    </S.Button>
  );
};
