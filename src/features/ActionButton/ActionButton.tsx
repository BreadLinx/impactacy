import { FcLike } from "react-icons/fc";
import * as S from "./styles";
import { FC, ReactElement, useState, useEffect } from "react";

interface ActionButtonProps {
  icon: ReactElement;
  action?: () => void;
  modifiedIcon?: ReactElement;
  modifiedAction?: () => void;
  isClicked?: boolean;
}

export const ActionButton: FC<ActionButtonProps> = ({
  icon,
  action,
  modifiedIcon,
  modifiedAction,
  isClicked,
}) => {
  const actionButtonType = modifiedIcon ? "state" : "default";

  return (
    <S.ActionButton
      onClick={() => {
        if (actionButtonType === "state") {
          if (!isClicked) {
            action && action();
          }
          if (isClicked) {
            modifiedAction && modifiedAction();
          }
        } else {
          action && action();
        }
      }}
    >
      {actionButtonType === "state" && isClicked ? modifiedIcon : icon}
    </S.ActionButton>
  );
};
