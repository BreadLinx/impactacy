import styled from "styled-components";

export const ProfileContainer = styled.main`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const ProfileBlock = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  width: calc((100vw - 318px) * 0.7);
`;

export const NameSection = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 4px 4px 15px #d9d9d9, -4px -4px 15px #ffffff;

  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
`;

export const ProfileImage = styled.img`
  height: 120px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
`;

export const ProfileNameBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
`;
export const RestInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
`;

export const ProfileButtonsBox = styled.div`
  align-self: flex-end;
  margin-left: auto;

  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  width: 100%;
`;
