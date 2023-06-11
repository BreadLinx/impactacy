import { useSession } from "next-auth/react";
import * as S from "./styles";
import { FC } from "react";
import { IUser } from "@app-types";
import { useRouter } from "next/router";

interface PostProfileBlockProps {
  user: IUser;
}

export const PostProfileBlock: FC<PostProfileBlockProps> = ({ user }) => {
  const router = useRouter();

  return (
    <S.ProfileBox onClick={() => router.push(`/${user._id}`)}>
      <S.ProfileImage src={user?.image} />
      <S.ProfileInfo>
        <S.ProfileName>{user?.name}</S.ProfileName>
        <S.ProfileCity>Rostov-on-Don, Russia</S.ProfileCity>
      </S.ProfileInfo>
    </S.ProfileBox>
  );
};
