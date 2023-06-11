import { FC } from "react";
import * as S from "./styles";

interface DefaultLoaderProps {}

export const DefaultLoader: FC<DefaultLoaderProps> = ({}) => {
  return (
    <div>
      <S.Svg viewBox="25 25 50 50">
        <S.Circle r="20" cy="50" cx="50" />
      </S.Svg>
    </div>
  );
};
