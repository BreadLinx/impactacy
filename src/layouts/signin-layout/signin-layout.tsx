import * as S from "./styles";
import { FC, ReactElement } from "react";

interface MainLayoutProps {
  children: ReactElement;
}

export const SignInLayout: FC<MainLayoutProps> = ({ children }) => {
  return <S.PageWrapper>{children}</S.PageWrapper>;
};
