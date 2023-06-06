import { FC, ReactElement } from "react";
import {
  BiHomeAlt2,
  BiMessageSquareDetail,
  BiBookmarks,
  BiRadar,
  BiMoney,
  BiUser,
} from "react-icons/bi";
import { Button } from "shared/Button";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { SideMenuLink } from "features/SideMenuLink";
import { SideMenuProfile } from "features/SideMenuProfile";
import { SideMenuPattern } from "entities/SideMenuPattern";

interface SideMenuProps {
  logo: ReactElement;
}

export const SideMenu: FC<SideMenuProps> = ({ logo }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (typeof session === "undefined") {
    return <SideMenuPattern logo={logo} />;
  }

  if (!session) {
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
              router.push("/login");
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
            href={`/${session.user.id}`}
            icon={<BiUser size={"30px"} />}
            isActive={
              router.asPath.startsWith(`/${session.user.id}`) ||
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
