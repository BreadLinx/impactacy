import * as S from "./styles";
import { FC, ReactElement } from "react";
import { SideMenu } from "widgets/SideMenu";
import { Logo } from "widgets/Logo";
import toast, { Toaster } from "react-hot-toast";

interface MainLayoutProps {
  children: ReactElement;
  title?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <S.PageWrapper>
      <SideMenu logo={<Logo />} />
      <S.Main>
        {title && <h1>{title}</h1>}
        {children}
      </S.Main>
      <S.Aside>Поиск</S.Aside>
      <Toaster position="bottom-right" />
    </S.PageWrapper>
  );
};