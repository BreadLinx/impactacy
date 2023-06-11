import styled from "styled-components";
import Link from "next/link";

export const NavLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
  border-radius: 50px;
  padding: 15px 20px;
  width: min-content;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #dbdbdb;
  }
`;

interface LinkTextProps {
  isActive: boolean;
}

export const LinkText = styled.p<LinkTextProps>`
  font-size: 20px;
  font-weight: ${({ isActive }) => (isActive ? "800" : "600")};
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
`;
