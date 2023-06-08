import * as S from "./styles";
import { FC, useState, useEffect } from "react";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillApple,
} from "react-icons/ai";
import axios from "axios";
import { AccountLinkButton } from "shared/account-link-button";
import { useRouter } from "next/router";
import { useAuth, AuthStatus } from "modules/auth";

const getLinkedAccounts = async () => {
  const res = await axios.get("http://localhost:5000/accounts/me", {
    withCredentials: true,
  });

  return res.data;
};

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
      const accounts = (await getLinkedAccounts()) as any;
      accounts.forEach((account: any) => {
        if (account.type === "google") {
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
    <S.Section>
      <h2>Social accounts login</h2>

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

              await axios
                .delete(
                  `http://localhost:5000/accounts/${linkedAccounts.google._id}`,
                  { withCredentials: true },
                )
                .catch(err => {
                  return;
                });

              setLinkedAccounts(prev => ({
                ...prev,
                google: {
                  status: false,
                  _id: "",
                },
              }));
            } else {
              router.push(
                `http://localhost:5000/link/google?userId=${session.user?._id}`,
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
    </S.Section>
  );
};
