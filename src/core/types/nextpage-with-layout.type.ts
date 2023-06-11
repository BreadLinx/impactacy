import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<
  Props,
  InitialProps
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
