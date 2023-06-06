import * as S from "./styles";
import { FC, useState, ReactElement } from "react";

interface SideMenuPatternProps {
  logo: ReactElement;
  linksFeatures?: ReactElement;
  profileFeature?: ReactElement;
  additionalButton?: ReactElement;
}

export const SideMenuPattern: FC<SideMenuPatternProps> = ({
  logo,
  linksFeatures,
  profileFeature,
  additionalButton,
}) => {
  const [isHover, setHover] = useState(false);

  return (
    <S.Header
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      isHover={isHover}
    >
      {logo}
      <S.NavBlock>
        <S.Nav>{linksFeatures}</S.Nav>
        {additionalButton}
      </S.NavBlock>
      {profileFeature}
    </S.Header>
  );
};
