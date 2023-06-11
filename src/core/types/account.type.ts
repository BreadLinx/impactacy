export enum AccountTypesEnum {
  GOOGLE = "google",
}

export interface IAccount {
  _id: string;
  accountId: string;
  type: AccountTypesEnum;
  userId: string;
  email: string;
  createdAt: Date;
  __v: number;
}
