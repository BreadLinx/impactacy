import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { MainLayout } from "layouts/main-layout";
import { NextPageWithLayout } from "@app-types";
import { useAuth } from "core/modules/authentication";
import { checkAuthMiddleware } from "@modules/authentication";

export const getServerSideProps: GetServerSideProps<{}> = checkAuthMiddleware(
  async (context, user) => {
    return { props: {} };
  },
);

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = ({}) => {
  const { session } = useAuth();

  return <div>{session.user?.name}</div>;
};

Page.getLayout = (page: ReactElement) => {
  return <MainLayout title="Edit profile">{page}</MainLayout>;
};

export default Page;
