import * as S from "./styles";
import { FC, JSXElementConstructor, ReactElement } from "react";
import { SideMenu } from "widgets/SideMenu/SideMenu";

interface MainLayoutProps {
  children: ReactElement;
}

export const SignInLayout: FC<MainLayoutProps> = ({ children }) => {
  return <S.PageWrapper>{children}</S.PageWrapper>;
};
