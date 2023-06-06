import { NextPage } from "next";
import { ReactElement, ReactNode, FC } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface IUser {
  _id: string;
  name: string;
  email: string;
  image: string;
  emailVerified: boolean | null;
}

export interface IActivity {
  _id: string;
  title: string;
  text: string;
  owner: IUser;
  likes: string[];
  dislikes: string[];
  promotions: string[];
  createdAt: string;
}
