import styled from "styled-components";

export const Button = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 4px;
  background-color: #fec4ff;
  border: none;
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: calc(100%);

  &:hover {
    box-shadow: 7px 5px 56px -14px #fec4ff;
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 7px 5px 56px -10px #fec4ff;
  }
`;
