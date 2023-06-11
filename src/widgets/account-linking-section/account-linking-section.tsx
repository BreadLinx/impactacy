import * as S from "./styles";
import { FC, useState, useEffect } from "react";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillApple,
} from "react-icons/ai";
import { AccountLinkButton } from "shared/account-link-button";
import { useRouter } from "next/router";
import { useAuth, AuthStatus } from "core/modules/authentication";
import { SettingsSection } from "entities/settings-section";
import { getLinkedAccountsRequest, deleteAccountRequest } from "./api";
import { AccountTypesEnum } from "@app-types";
import { BACKEND_URL } from "@constants";

interface AccountLinkingSectionProps {}

export const AccountLinkingSection: FC<AccountLinkingSectionProps> = ({}) => {
  const router = useRouter();
  const { session } = useAuth();

  const [linkedAccounts, setLinkedAccounts] = useState({
    google: {
      status: false,
      _id: "",
    },
    facebook: {
      status: false,
      _id: "",
    },
    apple: {
      status: false,
      _id: "",
    },
  });

  useEffect(() => {
    (async () => {
      const accounts = await getLinkedAccountsRequest();
      if (!accounts) return;

      accounts.forEach(account => {
        if (account.type === AccountTypesEnum.GOOGLE) {
          setLinkedAccounts(prev => ({
            ...prev,
            google: {
              status: true,
              _id: account._id,
            },
          }));
        }
      });
    })();
  }, []);

  return (
    <SettingsSection
      title="Social accounts login"
      text="Link your social accounts to easilly sign in"
    >
      <S.ButtonsBlock>
        <AccountLinkButton
          onClick={async () => {
            if (session.status === AuthStatus.Unauthenticated) {
              return;
            }

            if (linkedAccounts.google.status) {
              const confirmResult = confirm(
                "Are you sure you want to unlink this account?",
              );
              if (!confirmResult) return;

              const result = await deleteAccountRequest(
                linkedAccounts.google._id,
              );
              if (result?.message === "Account deleted successfully") {
                setLinkedAccounts(prev => ({
                  ...prev,
                  google: {
                    status: false,
                    _id: "",
                  },
                }));
              }
            } else {
              router.push(
                `${BACKEND_URL}/link/google?userId=${session.user?._id}`,
              );
            }
          }}
          icon={<AiFillGoogleCircle size={20} />}
          text={
            linkedAccounts.google.status
              ? "Google account linked"
              : "Link Google account"
          }
        />
      </S.ButtonsBlock>
    </SettingsSection>
  );
};
