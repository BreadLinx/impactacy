import * as S from "./styles";
import { FC, useRef, useState } from "react";
import { BiDotsHorizontalRounded, BiLogOut } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";

interface SideMenuProfileProps {}

export const SideMenuProfile: FC<SideMenuProfileProps> = ({}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const profileBlockRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <S.ProfileBlock
        ref={profileBlockRef}
        onClick={() => {
          setMenuOpen(prev => !prev);
        }}
      >
        <S.ProfileImage src={session?.user.image || ""} alt="profile picture" />
        <S.ProfileInfo>
          <S.ProfileName>{session?.user.name}</S.ProfileName>
          <S.ProfileEmail>{session?.user.email}</S.ProfileEmail>
        </S.ProfileInfo>
        <S.DotsButton>
          <BiDotsHorizontalRounded size={"25px"} />
        </S.DotsButton>
      </S.ProfileBlock>

      <Menu
        anchorEl={profileBlockRef.current}
        id="account-menu"
        variant="menu"
        open={isMenuOpen}
        onClose={() => {
          setMenuOpen(false);
        }}
        onClick={() => {
          setMenuOpen(false);
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 200,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "&:before": {
              content: "''",
              display: "block",
              position: "absolute",
              bottom: -5,
              left: "50%",
              transform: "translateX(-50%) rotate(45deg)",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: 60 }}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <MenuItem
          onClick={async () => {
            const result = await signOut({
              callbackUrl: "/activity",
              redirect: false,
            });

            router.push(result.url);
          }}
        >
          <BiLogOut
            style={{
              marginRight: "10px",
            }}
          />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
