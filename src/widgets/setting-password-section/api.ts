import { api } from "@modules/axios";

export const getPasswordStatus = async (): Promise<{ password: boolean }> => {
  const result = await api.get("/users/me/password", { withCredentials: true });
  return result.data;
};
