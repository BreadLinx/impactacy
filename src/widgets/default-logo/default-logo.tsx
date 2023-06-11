import * as S from "./styles";
import { FC } from "react";
import { AiOutlineTwitter } from "react-icons/ai";

interface LogoProps {}

export const Logo: FC<LogoProps> = ({}) => {
  return (
    <S.LogoLink href="/">
      <AiOutlineTwitter size={"50px"} color="#FF7636" />
    </S.LogoLink>
  );
};
