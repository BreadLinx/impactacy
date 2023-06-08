import {
  getMeRequest,
  getMeServerRequest,
  signInRequest,
  signOutRequest,
  createUserRequest,
} from "./api";
import { useEffect } from "react";
import { IUser } from "types/types";
import { create } from "zustand";
import { useRouter } from "next/router";

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

interface IAuthState {
  session: { status: AuthStatus; user: IUser | null };
  setSession: (session: { status: AuthStatus; user: IUser | null }) => void;
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
        router.push("http://localhost:5000/signin/google");
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

export const getServerUser = async (cookies: string | undefined) => {
  const token = cookies?.split("accessToken=")[1];
  if (!token) return null;

  const result = await getMeServerRequest(token);
  return result;
};
