import { GetServerSideProps } from "next";
import { FC } from "react";

interface PageProps {}

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    redirect: {
      destination: "/account/edit",
      permanent: false,
    },
  };
};

const Page: FC<PageProps> = ({}) => {
  return <></>;
};

export default Page;
