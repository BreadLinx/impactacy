import { IUser } from "@app-types";

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
