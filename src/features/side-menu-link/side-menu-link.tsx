import * as S from "./styles";
import { FC, ReactElement } from "react";

interface SideMenuLinkProps {
  href: string;
  icon?: ReactElement;
  text: string;
  isActive?: boolean;
}

export const SideMenuLink: FC<SideMenuLinkProps> = ({
  icon,
  href,
  text,
  isActive = false,
}) => {
  return (
    <S.NavLink href={href}>
      {icon}
      <S.LinkText isActive={isActive}>{text}</S.LinkText>
    </S.NavLink>
  );
};
