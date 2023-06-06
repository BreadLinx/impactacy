import {
  BiDotsHorizontalRounded,
  BiBookmark,
  BiTrendingUp,
  BiShare,
} from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineDislike, AiTwotoneDislike } from "react-icons/ai";
import { FC, useState, useEffect } from "react";
import { ActivityCardPattern } from "entities/ActivityCardPattern";
import { ActionButton } from "features/ActionButton";
import { DateFeature } from "features/DateFeature";
import { PostProfileBlock } from "features/PostProfileBlock";
import { IActivity } from "types/types";
import { authApi } from "lib/ky/options";
import { useSession } from "next-auth/react";
import * as S from "./styles";

interface ActivityCardProps {
  activity: IActivity;
  full?: boolean;
}

export const ActivityCard: FC<ActivityCardProps> = ({
  activity,
  full = false,
}) => {
  const { data: session } = useSession();
  const [isLiked, setLiked] = useState(false);
  const [isDisliked, setDisliked] = useState(false);

  const [likeCounter, setLikeCounter] = useState(activity.likes.length);
  const [dislikeCounter, setDislikeCounter] = useState(
    activity.dislikes.length,
  );

  useEffect(() => {
    setLiked(activity.likes.some(userId => userId === session?.user.id));
    setDisliked(activity.dislikes.some(userId => userId === session?.user.id));
  }, [session, activity.dislikes, activity.likes]);

  return (
    <ActivityCardPattern
      title={activity?.title}
      text={activity?.text}
      cardLink={`/activity/${activity?._id}`}
      full={full}
      profileBlock={<PostProfileBlock user={activity?.owner} />}
      dotsActionButton={
        <ActionButton
          isClicked={false}
          icon={<BiDotsHorizontalRounded size={25} />}
        />
      }
      bottomActionButtons={
        <>
          <S.ActionButtonWrapper>
            <ActionButton
              icon={<FcLikePlaceholder size={25} />}
              modifiedIcon={<FcLike size={25} />}
              isClicked={isLiked}
              action={() => {
                if (!session) {
                  return;
                }
                authApi.put(`activities/${activity._id}/likes`, {
                  headers: {
                    authorization: `Bearer ${session?.user.authToken}`,
                  },
                });
                if (isDisliked) {
                  setDisliked(false);
                  setDislikeCounter(prev => prev - 1);
                }
                setLiked(true);
                setLikeCounter(prev => prev + 1);
              }}
              modifiedAction={() => {
                if (!session) {
                  return;
                }
                authApi.delete(`activities/${activity._id}/likes`, {
                  headers: {
                    authorization: `Bearer ${session?.user.authToken}`,
                  },
                });
                setLiked(false);
                setLikeCounter(prev => prev - 1);
              }}
            />
            {likeCounter !== 0 && (
              <S.ActionButtonCounter>{likeCounter}</S.ActionButtonCounter>
            )}
          </S.ActionButtonWrapper>
          <S.ActionButtonWrapper>
            <ActionButton
              icon={<AiOutlineDislike size={25} />}
              modifiedIcon={<AiTwotoneDislike size={25} color="#0071e3" />}
              isClicked={isDisliked}
              action={() => {
                if (!session) {
                  return;
                }
                authApi.put(`activities/${activity._id}/dislikes`, {
                  headers: {
                    authorization: `Bearer ${session?.user.authToken}`,
                  },
                });
                if (isLiked) {
                  setLiked(false);
                  setLikeCounter(prev => prev - 1);
                }
                setDisliked(true);
                setDislikeCounter(prev => prev + 1);
              }}
              modifiedAction={() => {
                if (!session) {
                  return;
                }
                authApi.delete(`activities/${activity._id}/dislikes`, {
                  headers: {
                    authorization: `Bearer ${session?.user.authToken}`,
                  },
                });
                setDisliked(false);
                setDislikeCounter(prev => prev - 1);
              }}
            />
            {dislikeCounter !== 0 && (
              <S.ActionButtonCounter>{dislikeCounter}</S.ActionButtonCounter>
            )}
          </S.ActionButtonWrapper>

          <ActionButton
            icon={<BiBookmark size={25} />}
            modifiedIcon={<BsBookmarkFill size={25} color="#0071e3" />}
          />
          <ActionButton
            icon={<BiTrendingUp size={25} />}
            modifiedIcon={<BiTrendingUp size={25} color="FF7636" />}
          />
          <ActionButton icon={<BiShare size={25} />} />
        </>
      }
      dateFeature={<DateFeature dateString={activity?.createdAt} />}
    />
  );
};
