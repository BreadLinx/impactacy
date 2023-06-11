import * as S from "./styles";
import { Dispatch, FC, SetStateAction } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { MuiPasswordInput } from "shared/mui-password-input";
import * as Yup from "yup";
import { setInitialPasswordRequest } from "./api";

interface SetInitialPasswordFeatureProps {
  setPasswordStatus: Dispatch<SetStateAction<boolean | undefined>>;
}

const SetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string().required("Password confirmation required"),
});

export const SetInitialPasswordFeature: FC<SetInitialPasswordFeatureProps> = ({
  setPasswordStatus,
}) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ password, confirmPassword }) => {
      if (password !== confirmPassword) {
        formik.errors.confirmPassword = "Passwords do not match";
      }

      const result = await setInitialPasswordRequest(password);
      if (result.message === "Password was successfully set") {
        setPasswordStatus(true);
      }
    },
    validationSchema: SetPasswordSchema,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit} autoComplete="off">
      <MuiPasswordInput
        inputName="Password"
        showError={formik.touched.password && !!formik.errors.password}
        inputErrors={formik.errors.password}
        fieldProps={formik.getFieldProps("password")}
      />

      <MuiPasswordInput
        inputName="Confirm password"
        showError={
          formik.touched.confirmPassword && !!formik.errors.confirmPassword
        }
        inputErrors={formik.errors.confirmPassword}
        fieldProps={formik.getFieldProps("confirmPassword")}
      />

      <Button variant="contained" type="submit">
        Set password
      </Button>
    </S.Form>
  );
};
