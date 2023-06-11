import * as S from "./styles";
import { FC, ReactElement } from "react";
import {
  BiHomeAlt2,
  BiMessageSquareDetail,
  BiBookmarks,
  BiRadar,
  BiMoney,
  BiUser,
} from "react-icons/bi";
import { Button } from "shared/round-button";
import { useRouter } from "next/router";
import { SideMenuLink } from "features/side-menu-link";
import { SideMenuProfile } from "features/side-menu-profile";
import { SideMenuPattern } from "entities/side-menu-pattern";
import { useAuth, AuthStatus } from "core/modules/authentication";

interface SideMenuProps {
  logo: ReactElement;
}

export const SideMenu: FC<SideMenuProps> = ({ logo }) => {
  const router = useRouter();
  const { session, update } = useAuth();

  if (typeof session === "undefined") {
    return <SideMenuPattern logo={logo} />;
  }

  if (session.status !== AuthStatus.Authenticated) {
    return (
      <SideMenuPattern
        logo={logo}
        linksFeatures={
          <>
            <SideMenuLink
              href="/activity"
              icon={<BiRadar size={"30px"} />}
              isActive={router.pathname.startsWith("/activity")}
              text="Activities"
            />
            <SideMenuLink
              href="/charity"
              icon={<BiMoney size={"30px"} />}
              isActive={router.pathname.startsWith("/charity")}
              text="Charity"
            />
          </>
        }
        additionalButton={
          <Button
            onClick={() => {
              router.push("/signin");
            }}
          >
            Sign in
          </Button>
        }
      />
    );
  }

  return (
    <SideMenuPattern
      logo={logo}
      linksFeatures={
        <>
          <SideMenuLink
            href="/"
            icon={<BiHomeAlt2 size={"30px"} />}
            isActive={router.pathname === "/"}
            text="Home"
          />
          <SideMenuLink
            href="/messages"
            icon={<BiMessageSquareDetail size={"30px"} />}
            isActive={router.pathname.startsWith("/messages")}
            text="Messages"
          />
          <SideMenuLink
            href="/bookmarks"
            icon={<BiBookmarks size={"30px"} />}
            isActive={router.pathname.startsWith("/bookmarks")}
            text="Bookmarks"
          />
          <SideMenuLink
            href="/activity"
            icon={<BiRadar size={"30px"} />}
            isActive={router.pathname.startsWith("/activity")}
            text="Activities"
          />
          <SideMenuLink
            href="/charity"
            icon={<BiMoney size={"30px"} />}
            isActive={router.pathname.startsWith("/charity")}
            text="Charity"
          />
          <SideMenuLink
            href={`/${session.user?._id}`}
            icon={<BiUser size={"30px"} />}
            isActive={
              router.asPath.startsWith(`/${session.user?._id}`) ||
              router.asPath.startsWith("/account")
            }
            text="Profile"
          />
        </>
      }
      profileFeature={<SideMenuProfile />}
      additionalButton={<Button>Start activity</Button>}
    />
  );
};
