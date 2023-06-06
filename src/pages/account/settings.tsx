import { GetServerSideProps } from "next";
import { FC, ReactElement } from "react";
import { getServerSession } from "next-auth";
import { MainLayout } from "layouts/MainLayout";
import { NextPageWithLayout } from "types/types";
import { signIn } from "next-auth/react";

interface PageProps {}

export const getServerSideProps: GetServerSideProps<{
  // user: IUser;
  // userActivities: IActivity[];
}> = async context => {
  const { profileId } = context.query;

  // const res = await fetch(`http://localhost:5000/users/${profileId}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const data = (await res.json()) as
  //   | { success: false; message: string }
  //   | { success: true; data: IUser };

  // const activitiesRes = await fetch(
  //   `http://localhost:5000/user-activities/${profileId}`,
  // );
  // const activitiesData = (await activitiesRes.json()) as
  //   | { success: false; message: string }
  //   | { success: true; data: IActivity[] };

  // if (!data.success && data.message === "User not found") {
  //   return {
  //     redirect: {
  //       destination: "/404",
  //       permanent: false,
  //     },
  //   };
  // }

  // if (!data.success && data.message === "User not found") {
  // }

  // if (!data.success || !activitiesData.success) {
  //   return {
  //     redirect: {
  //       destination: "/404",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {},
  };
};

const Page: NextPageWithLayout<PageProps> = ({}) => {
  return <div>123</div>;
};

Page.getLayout = (page: ReactElement) => {
  return <MainLayout title="Settings">{page}</MainLayout>;
};

export default Page;
