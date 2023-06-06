import * as S from "./styles";
import { FC, ReactElement, useRef } from "react";

interface ActivityCardPatternProps {
  title: string;
  text: string;
  cardLink: string;
  full: boolean;

  profileBlock?: ReactElement;
  dotsActionButton?: ReactElement;
  bottomActionButtons?: ReactElement;
  dateFeature?: ReactElement;
}

export const ActivityCardPattern: FC<ActivityCardPatternProps> = ({
  title,
  text,
  cardLink,
  full,
  profileBlock,
  dotsActionButton,
  bottomActionButtons,
  dateFeature,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.CardTitle>{title}</S.CardTitle>
        {dotsActionButton}
      </S.CardHeader>
      {full ? (
        <S.CardText full>{text} </S.CardText>
      ) : (
        <S.TextBlock>
          <S.CardText full={false}>{text} </S.CardText>
          <S.CardLink ref={linkRef} href={cardLink}>
            Read full
          </S.CardLink>
        </S.TextBlock>
      )}

      {profileBlock}
      <S.CardFooter>
        <S.ActionButtonsBox>{bottomActionButtons}</S.ActionButtonsBox>
        {dateFeature}
      </S.CardFooter>
    </S.CardContainer>
  );
};
