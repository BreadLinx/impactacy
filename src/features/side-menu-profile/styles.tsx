import styled from "styled-components";

export const ProfileBlock = styled.div`
  overflow-x: hidden;
  height: 71px;
  width: 278px;
  background-color: #fff;
  box-shadow: 4px 4px 15px #d9d9d9, -4px -4px 15px #ffffff;
  border-radius: 50px;
  padding: 10px;
  min-height: 71px;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 100%;
  aspect-ratio: 1 / 1;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ProfileName = styled.p`
  font-size: 17px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0;
  text-align: left;
  max-width: 155px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileEmail = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0;
  text-align: left;
  max-width: 155px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DotsButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  height: 60%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
