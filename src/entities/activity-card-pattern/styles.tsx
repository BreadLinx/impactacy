import styled from "styled-components";
import Link from "next/link";

export const CardContainer = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  background-color: #fff;
  box-shadow: 4px 4px 15px #d9d9d9, -4px -4px 15px #ffffff;
  border-radius: 20px;
  padding: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;
  max-width: 92%;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
`;

export const CardLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #0071e3;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

interface CardTextProps {
  full: boolean;
}

export const CardText = styled.p<CardTextProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;

  max-height: ${({ full }) => (full ? "min-content" : "114px")};
  overflow-y: ${({ full }) => (full ? "visible" : "hidden")};
`;

export const CardFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const ActionButtonsBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  justify-content: space-between;
`;
