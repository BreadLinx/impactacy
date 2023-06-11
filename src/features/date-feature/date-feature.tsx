import * as S from "./styles";
import { FC } from "react";
import { intlFormatDistance } from "date-fns";

interface DateFeatureProps {
  dateString: string;
}

export const DateFeature: FC<DateFeatureProps> = ({ dateString }) => {
  const dateDistance = intlFormatDistance(new Date(dateString), Date.now(), {
    locale: "en",
  });

  return <S.PostDate suppressHydrationWarning>{dateDistance}</S.PostDate>;
};
