import * as S from "./styles";
import { FC, useState } from "react";
import { BiDotsHorizontalRounded, BiReply } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineDislike, AiTwotoneDislike } from "react-icons/ai";

interface ActivityReplyProps {}

export const ActivityReply: FC<ActivityReplyProps> = ({}) => {
  const { data: session } = useSession();
  const [isLiked, setLiked] = useState(false);
  const [isDisLiked, setDisLiked] = useState(false);

  return (
    <S.Container>
      <S.CardContainer>
        <S.CardTitle>
          Строительство Мусорного полигона в Ростове убьет все живое в радиуса
          50 километров
        </S.CardTitle>
      </S.CardContainer>

      <S.ReplyContainer>
        <S.ReplyHeader>
          <BiReply size={35} />
          <S.ProfileBox>
            <S.ProfileImage src={session?.user.image || ""} />
            <S.ProfileInfo>
              <S.ProfileName>Anatoly Schevchenko</S.ProfileName>
              <S.ProfileCity>Rostov-on-Don, Russia</S.ProfileCity>
            </S.ProfileInfo>
          </S.ProfileBox>
          <S.DotsButton>
            <BiDotsHorizontalRounded size={25} />
          </S.DotsButton>
        </S.ReplyHeader>

        <S.ReplyText>
          Внезапно, базовые сценарии поведения пользователей представляют собой
          не что иное, как квинтэссенцию победы маркетинга над разумом и должны
          быть функционально разнесены на независимые элементы. Вот вам яркий
          пример современных тенденций — постоянное
          информационно-пропагандистское обеспечение нашей деятельности играет
          определяющее значение для системы массового участия. Банальные, но
          неопровержимые выводы, а также сделанные на базе интернет-аналитики
          выводы разоблаченыфывфывйв1вфффффффффвв....
        </S.ReplyText>
        <S.ReplyFooter>
          <S.ReplyButtonsBox>
            <S.ActionButton
              onClick={() => {
                setLiked(!isLiked);
              }}
            >
              {isLiked ? <FcLike size={25} /> : <FcLikePlaceholder size={25} />}
            </S.ActionButton>

            <S.ActionButton
              onClick={() => {
                setDisLiked(!isDisLiked);
              }}
            >
              {isDisLiked ? (
                <AiTwotoneDislike size={25} color="#4e71fe" />
              ) : (
                <AiOutlineDislike size={25} />
              )}
            </S.ActionButton>
          </S.ReplyButtonsBox>
          <S.PostDate>19 minutes ago</S.PostDate>
        </S.ReplyFooter>
      </S.ReplyContainer>
    </S.Container>
  );
};
