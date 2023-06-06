import Head from "next/head";
import { GetServerSideProps } from "next";
import { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "types/types";
import { MainLayout } from "layouts/MainLayout";
import { ActivityCard } from "widgets/ActivityCard";
import { authOptions } from "lib/next-auth/options";
import { getServerSession } from "next-auth";

export const getServerSideProps: GetServerSideProps<{}> = async context => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session?.user.email) {
    return {
      redirect: {
        destination: "/activity",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

interface PageProps {
  posts: { title: string; body: string; id: string }[];
}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <Head>
        <title>Daiko | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <MainLayout title="Home">{page}</MainLayout>;
};

export default Page;
