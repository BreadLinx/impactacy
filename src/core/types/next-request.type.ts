import { IncomingMessage } from "http";

export type TRequestType = IncomingMessage & {
  cookies: Partial<{
    [key: string]: string;
  }>;
};
