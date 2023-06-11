import * as S from "./styles";
import { FC, ReactElement } from "react";
import { DefaultLoader } from "shared/default-loader";

interface SettingsSectionProps {
  title: string;
  text: string;
  loading?: boolean;
  children: ReactElement;
}

export const SettingsSection: FC<SettingsSectionProps> = ({
  title,
  text,
  loading = false,
  children,
}) => {
  if (loading) {
    return (
      <S.LoadingSection>
        <DefaultLoader />
      </S.LoadingSection>
    );
  }

  return (
    <S.Section>
      <S.TextBlock>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.TextBlock>
      {children}
    </S.Section>
  );
};
