import styled from "styled-components";

export const Button = styled.button`
  background-color: #ff7636;
  height: 71px;
  width: 278px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;
