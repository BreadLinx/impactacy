import * as S from "./styles";
import { FC, useEffect } from "react";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { IUser } from "types/types";
import { useRouter } from "next/router";
import { useAuth } from "modules/auth";

interface ProfileSectionProps {
  user: IUser;
}

export const ProfileSection: FC<ProfileSectionProps> = ({ user }) => {
  const { session } = useAuth();
  const router = useRouter();

  return (
    <S.NameSection>
      <S.ProfileImage src={user?.image} />
      <S.ProfileNameBox>
        <S.Name>{user?.name}</S.Name>
        <S.RestInfo>Rostov-on-Don, Russia</S.RestInfo>
        <S.RestInfo>1.2M followers</S.RestInfo>
      </S.ProfileNameBox>
      {session.user?._id === user?._id ? (
        <S.ProfileButtonsBox>
          <Button
            variant="outlined"
            type="button"
            size="small"
            onClick={() => {
              router.push("/account/edit");
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            type="button"
            size="small"
            onClick={() => {
              router.push("/account/settings");
            }}
          >
            Account settings
          </Button>
        </S.ProfileButtonsBox>
      ) : (
        <S.ProfileButtonsBox>
          <Button
            variant="outlined"
            type="button"
            size="small"
            onClick={() => {
              toast("УРА победа((");
            }}
          >
            Message
          </Button>
          <Button
            variant="outlined"
            type="button"
            size="small"
            color="secondary"
          >
            Follow
          </Button>
        </S.ProfileButtonsBox>
      )}
    </S.NameSection>
  );
};
