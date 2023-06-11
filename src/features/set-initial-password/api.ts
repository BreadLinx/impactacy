import { api } from "@modules/axios";
import { toast } from "react-hot-toast";

interface SetInitialPasswordResponse {
  message: string;
}

export const setInitialPasswordRequest = async (password: string) => {
  try {
    const response = await api.post<SetInitialPasswordResponse>(
      "/password",
      { password },
      { withCredentials: true },
    );

    toast.success(response.data.message);
    return response.data;
  } catch (err: any) {
    toast.error(err.response.data.message);
    return err.response.data;
  }
};
