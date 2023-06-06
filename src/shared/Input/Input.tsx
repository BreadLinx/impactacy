import * as S from "./styles";
import { FC, InputHTMLAttributes, useState, useRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: FC<InputProps> = ({ label, ...inputProps }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFocusedOrValue = () => {
    if (inputProps.value || isFocused) {
      return true;
    }
    return false;
  };

  return (
    <S.InputContainer
      isFocused={isFocused}
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <S.Label isFocused={isFocusedOrValue()}>{label}</S.Label>
      <S.Input
        ref={inputRef}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        {...inputProps}
      />
    </S.InputContainer>
  );
};
