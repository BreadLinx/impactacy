import { api, handleError } from "@modules/axios";
import { IAccount, IBadServerResponse } from "@app-types";
import { toast } from "react-hot-toast";

type GetLinkedAccountsResponse = IAccount[] & IBadServerResponse;

export const getLinkedAccountsRequest = async () => {
  try {
    const response = await api.get<GetLinkedAccountsResponse>("/accounts/me", {
      withCredentials: true,
    });

    return response.data;
  } catch (err: any) {
    if (err?.response.data.message === "Accounts not found") return;
    handleError(err);
  }
};

interface deleteAccountResponse extends IBadServerResponse {
  message: string;
}

export const deleteAccountRequest = async (accountId: string) => {
  try {
    const response = await api.delete<deleteAccountResponse>(
      `/accounts/${accountId}`,
      {
        withCredentials: true,
      },
    );

    toast.success(response.data.message);
    return response.data;
  } catch (err: any) {
    handleError(err);
  }
};
