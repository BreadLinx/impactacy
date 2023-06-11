import * as S from "./styles";
import { FC, useState } from "react";
import {
  InputLabel,
  FormControl,
  Button,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useId } from "react";
import { FieldInputProps } from "formik";

interface MuiPasswordInputProps {
  inputName: string;
  showError?: boolean;
  inputErrors?: string;
  fieldProps: FieldInputProps<any>;
  size?: "small" | "medium";
}

export const MuiPasswordInput: FC<MuiPasswordInputProps> = ({
  inputName,
  showError = false,
  inputErrors = "",
  fieldProps,
  size = "small",
}) => {
  const inputId = useId();
  const [isPasswordShown, setPasswordShown] = useState(false);

  return (
    <FormControl error={showError} size={size}>
      <InputLabel htmlFor={inputId}>{inputName}</InputLabel>
      <OutlinedInput
        label={inputName}
        id={inputId}
        {...fieldProps}
        type={isPasswordShown ? "type" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setPasswordShown(prev => !prev);
              }}
              edge="end"
            >
              {isPasswordShown ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {showError && <FormHelperText>{inputErrors}</FormHelperText>}
    </FormControl>
  );
};
