import * as S from "./styles";
import { FC } from "react";
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

interface MuiInputProps {
  inputName: string;
  showError: boolean;
  inputErrors: string;
  fieldProps: FieldInputProps<any>;
}

export const MuiInput: FC<MuiInputProps> = ({
  inputName,
  showError = false,
  inputErrors,
  fieldProps,
}) => {
  const inputId = useId();

  return (
    <FormControl error={showError}>
      <InputLabel htmlFor={inputId}>{inputName}</InputLabel>
      <OutlinedInput id={inputId} label={inputName} {...fieldProps} />
      {showError && <FormHelperText>{inputErrors}</FormHelperText>}
    </FormControl>
  );
};
