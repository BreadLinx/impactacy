import styled from "styled-components";

export const ProfileBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  width: fit-content;
  cursor: pointer;
  background-color: #fff;
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

  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileCity = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;
