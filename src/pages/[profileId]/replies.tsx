import { FC, ReactElement } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout, IUser } from "types/types";
import { MainLayout } from "layouts/MainLayout";
import Head from "next/head";
import { Session, getServerSession } from "next-auth";
import { GetServerSideProps } from "next";
import { authOptions } from "lib/next-auth/options";
import { ActivityCard } from "widgets/ActivityCard/ActivityCard";
import { ProfileSection } from "widgets/ProfileSection";
import { ProfilePageTabs } from "features/ProfilePageTabs";

interface PageProps {
  user: IUser;
}

export const getServerSideProps: GetServerSideProps<{
  user: IUser;
}> = async context => {
  const { profileId } = context.query;
  const res = await fetch(`http://localhost:5000/users/${profileId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await res.json()) as
    | { success: false; message: string }
    | { success: true; data: IUser };

  if (!data.success && data.message === "User not found") {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  if (!data.success && data.message === "User not found") {
  }

  if (!data.success) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: data.data,
    },
  };
};

const Page: NextPageWithLayout<PageProps> = ({ user }) => {
  const router = useRouter();
  const { profileId } = router.query;

  return (
    <>
      <Head>
        <title>Profile | Daiko</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfileSection user={user} />
      <ProfilePageTabs
        firstLink={`/${profileId}`}
        secondLink={`/${profileId}/replies`}
      />
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <MainLayout title="Profile">{page}</MainLayout>;
};

export default Page;
