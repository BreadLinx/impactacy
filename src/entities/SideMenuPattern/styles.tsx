import styled from "styled-components";

interface HeaderProps {
  isHover: boolean;
}

export const Header = styled.header<HeaderProps>`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  max-height: 100vh;
  padding: 20px 10px 20px 30px;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: ${({ isHover }) => (isHover ? "5px" : "0px")};
  }

  &::-webkit-scrollbar-track {
    background-color: initial;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cbcbcb;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const NavBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
`;
