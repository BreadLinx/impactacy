import styled from "styled-components";

interface InputContainerProps {
  isFocused: boolean;
}

export const InputContainer = styled.div`
  cursor: pointer;
  position: relative;
  border: ${({ isFocused }: InputContainerProps) =>
    isFocused ? "2px solid #FF7636" : "2px solid #a8a8a8"};
  border-radius: 5px;
  height: 55px;
`;

interface LabelProps {
  isFocused: boolean;
}

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: ${({ isFocused }) => (!isFocused ? "50%" : "5px")};
  transform: ${({ isFocused }) => (!isFocused ? "translateY(-50%)" : "none")};
  transition: all 0.1s ease;
  left: 5px;
  z-index: 1;

  font-size: ${({ isFocused }) => (!isFocused ? "20px" : "15px")};
  line-height: ${({ isFocused }) => (!isFocused ? "24px" : "18px")};

  font-weight: 700;
  letter-spacing: 0;
  text-align: left;
  font-weight: 500;

  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  height: 20px;
  outline: none;
  padding: 0;
  position: absolute;
  bottom: 5px;
  left: 5px;

  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;

  width: calc(100% - 7px);
  cursor: pointer;
`;
