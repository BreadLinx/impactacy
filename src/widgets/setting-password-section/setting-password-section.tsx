import * as S from "./styles";
import { FC, useEffect, useState } from "react";
import { SettingsSection } from "entities/settings-section";
import { getPasswordStatus } from "./api";
import { SetInitialPasswordFeature } from "features/set-initial-password/set-initial-password.feature";
import { ChangePasswordFeature } from "features/change-password/change-password.feature";

interface SettingPasswordSectionProps {}

export const SettingPasswordSection: FC<SettingPasswordSectionProps> = ({}) => {
  const [isPassword, setIsPassword] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const passwordStatus = await getPasswordStatus();
      setIsPassword(passwordStatus.password);
    })();
  }, []);

  const sectionText = isPassword
    ? "Change your password"
    : "Set up password you can use to log in to your account with your email address";

  return (
    <SettingsSection
      title="Password"
      text={sectionText}
      loading={isPassword === undefined}
    >
      {isPassword ? (
        <ChangePasswordFeature />
      ) : (
        <SetInitialPasswordFeature setPasswordStatus={setIsPassword} />
      )}
    </SettingsSection>
  );
};
