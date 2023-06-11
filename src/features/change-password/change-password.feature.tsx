import * as S from "./styles";
import { FC } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { MuiPasswordInput } from "shared/mui-password-input";
import * as Yup from "yup";
import { changePasswordRequest } from "./api";

interface ChangePasswordFeatureProps {}

const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string().required("Password required"),
  newPassword: Yup.string()
    .required("Password required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string().required("Password confirmation required"),
});

export const ChangePasswordFeature: FC<ChangePasswordFeatureProps> = ({}) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async ({ password, newPassword, confirmPassword }) => {
      if (newPassword !== confirmPassword) {
        formik.errors.confirmPassword = "Passwords do not match";
      }

      await changePasswordRequest(password, newPassword);
    },
    validationSchema: ChangePasswordSchema,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit} autoComplete="off">
      <MuiPasswordInput
        inputName="Your password"
        showError={formik.touched.password && !!formik.errors.password}
        inputErrors={formik.errors.password}
        fieldProps={formik.getFieldProps("password")}
      />

      <MuiPasswordInput
        inputName="New password"
        showError={formik.touched.newPassword && !!formik.errors.newPassword}
        inputErrors={formik.errors.newPassword}
        fieldProps={formik.getFieldProps("newPassword")}
      />

      <MuiPasswordInput
        inputName="Confirm new password"
        showError={
          formik.touched.confirmPassword && !!formik.errors.confirmPassword
        }
        inputErrors={formik.errors.confirmPassword}
        fieldProps={formik.getFieldProps("confirmPassword")}
      />

      <Button variant="contained" type="submit">
        Change password
      </Button>
    </S.Form>
  );
};
