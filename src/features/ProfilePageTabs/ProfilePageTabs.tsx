import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import * as S from "./styles";
import { FC } from "react";
import { useRouter } from "next/router";

interface ProfilePageTabsProps {
  firstLink: string;
  secondLink: string;
}

export const ProfilePageTabs: FC<ProfilePageTabsProps> = ({
  firstLink,
  secondLink,
}) => {
  const router = useRouter();

  return (
    <ToggleButtonGroup
      size="small"
      fullWidth
      color="primary"
      value={router.asPath}
      exclusive
      onChange={(e, newValue: string) => {
        if (!newValue) return;
        router.push(newValue);
      }}
      aria-label="Platform"
    >
      <ToggleButton value={firstLink}>Activities</ToggleButton>
      <ToggleButton value={secondLink}>Replies</ToggleButton>
    </ToggleButtonGroup>
  );
};
