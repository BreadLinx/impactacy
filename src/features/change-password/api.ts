import { api } from "@modules/axios";
import { toast } from "react-hot-toast";

interface ChangePasswordResponse {
  message: string;
}

export const changePasswordRequest = async (
  password: string,
  newPassword: string,
) => {
  try {
    const response = await api.post<ChangePasswordResponse>(
      "/password/change",
      { password, newPassword },
      { withCredentials: true },
    );

    toast.success(response.data.message);
    return response.data;
  } catch (err: any) {
    toast.error(err.response.data.message);
  }
};
