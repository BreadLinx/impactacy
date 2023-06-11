import {
  getMeRequest,
  getMeServerRequest,
  signInRequest,
  signOutRequest,
  createUserRequest,
} from "./api";
import { useEffect } from "react";
import { IUser, TRequestType } from "@app-types";
import { create } from "zustand";
import { useRouter } from "next/router";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";

const { NEXT_PUBLIC_BACKEND_URL = "http://localhost:5000" } = process.env;

export enum AuthStatus {
  Unauthenticated = "unauthenticated",
  Authenticated = "authenticated",
  Loading = "loading",
}

export enum AuthProviders {
  Google = "google",
}

interface SignInDto {
  email: string;
  password: string;
}

interface SignUpDto extends SignInDto {
  name: string;
}

type TSession =
  | { status: AuthStatus.Authenticated; user: IUser }
  | { status: AuthStatus.Unauthenticated | AuthStatus.Loading; user: null };

interface IAuthState {
  session: TSession;
  setSession: (session: TSession) => void;
}

const useAuthStore = create<IAuthState>((set, get) => ({
  session: {
    status: AuthStatus.Unauthenticated,
    user: null,
  },
  setSession: session => set({ session }),
}));

export const useAuth = () => {
  const { session, setSession } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (session.status === AuthStatus.Authenticated) {
      return;
    }

    update();
  }, []);

  const update = async () => {
    setSession({
      user: null,
      status: AuthStatus.Loading,
    });

    const result = await getMeRequest();

    if (result) {
      setSession({
        status: AuthStatus.Authenticated,
        user: result,
      });
    } else {
      setSession({
        status: AuthStatus.Unauthenticated,
        user: null,
      });
    }
  };

  const signIn = async (dto: SignInDto) => {
    const result = await signInRequest(dto);
    setSession({
      status: AuthStatus.Authenticated,
      user: result,
    });
  };

  const signInWithProvider = (provider: AuthProviders) => {
    switch (provider) {
      case AuthProviders.Google:
        router.push(`${NEXT_PUBLIC_BACKEND_URL}/signin/google`);
        break;
    }
  };

  const signOut = async () => {
    await signOutRequest();

    setSession({
      status: AuthStatus.Unauthenticated,
      user: null,
    });
  };

  const signUp = async (dto: SignUpDto) => {
    const result = await createUserRequest(dto);

    setSession({
      status: AuthStatus.Authenticated,
      user: result,
    });
  };

  return {
    session,
    update,
    signIn,
    signUp,
    signInWithProvider,
    signOut,
  };
};

export const getServerUser = async (req: TRequestType) => {
  const accessToken = req?.cookies["accessToken"];

  if (!accessToken) {
    return null;
  }

  return await getMeServerRequest(accessToken);
};

type ExtendedGetServerSideProps<P> = (
  context: GetServerSidePropsContext,
  user: IUser,
) => Promise<GetServerSidePropsResult<P>>;

export const checkAuthMiddleware = <P extends {}>(
  getServerSideProps: ExtendedGetServerSideProps<P>,
): GetServerSideProps<P> => {
  return async (
    context: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const user = await getServerUser(context.req);
    if (!user) {
      return {
        redirect: {
          destination: "/activity",
          permanent: false,
        },
      };
    }

    return await getServerSideProps(context, user);
  };
};

export const preventAuthUsersMiddleware = <P extends {}>(
  getServerSideProps: GetServerSideProps<P>,
): GetServerSideProps<P> => {
  return async (
    context: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const user = await getServerUser(context.req);
    if (user) {
      return {
        redirect: {
          destination: "/activity",
          permanent: false,
        },
      };
    }

    return await getServerSideProps(context);
  };
};
