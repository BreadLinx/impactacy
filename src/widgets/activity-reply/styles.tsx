import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 4px 4px 15px #d9d9d9, -4px -4px 15px #ffffff;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  background-color: #fff;
  padding: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom: 2px solid #d9d9d9;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;
  max-width: 100%;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
`;

export const ProfileName = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
`;

export const ProfileCity = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0;
  text-align: left;
`;

export const PostDate = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0;
  text-align: left;
  align-self: flex-end;
`;

export const ReplyContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  background-color: #fff;
  padding: 10px 20px 20px 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ReplyHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
`;

export const ReplyText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
  max-height: 120px;
  overflow-y: hidden;
`;
export const ReplyFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const DotsButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  margin-left: auto;

  &:hover {
    background-color: #dbdbdb;
  }
`;

export const ReplyButtonsBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
`;

export const ActionButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #dbdbdb;
  }
`;
