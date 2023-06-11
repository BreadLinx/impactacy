import { api } from "@modules/axios/axios";
import { IUser } from "@app-types";

export const getMeRequest = async (): Promise<IUser> => {
  const result = await api
    .get(`/users/me`, {
      withCredentials: true,
    })
    .catch(err => err.toJSON());

  return result.data;
};

export const getMeServerRequest = async (
  accessToken: string,
): Promise<IUser> => {
  const result = await api
    .get(`/users/me`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
    .catch(err => err.toJSON());

  return result.data;
};

interface SignInDto {
  email: string;
  password: string;
}

export const signInRequest = async (dto: SignInDto): Promise<IUser> => {
  const result = await api
    .post(
      `/signin`,
      {
        data: dto,
      },
      { withCredentials: true },
    )
    .catch(err => err.toJSON());

  return result.data;
};

interface SignUpDto {
  email: string;
  password: string;
  name: string;
}

export const createUserRequest = async (dto: SignUpDto): Promise<IUser> => {
  const result = await api
    .post(
      `/signup`,
      {
        data: dto,
      },
      { withCredentials: true },
    )
    .catch(err => err.toJSON());

  return result.data;
};

interface SignOutResponse {
  message: string;
}

export const signOutRequest = async (): Promise<SignOutResponse> => {
  const result = await api
    .post(`/signout`, undefined, {
      withCredentials: true,
    })
    .catch(err => err.toJSON());

  return result.data;
};
