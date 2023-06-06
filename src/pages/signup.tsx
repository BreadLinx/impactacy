import { FC, ReactElement, useState } from "react";
import { SignInLayout } from "layouts/SignInLayout/SignInLayout";
import { NextPageWithLayout } from "types/types";
import * as S from "@pages-styles/signup/styles";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";
import { Input } from "shared/Input/Input";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short, min 2 characters")
    .max(50, "Too Long, max 50 characters")
    .required("Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(8, "Too Short, min 8 characters")
    .required("Password required"),
});

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = ({}) => {
  const handleGoogleSignIn = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: SignupSchema,
  });

  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <S.Container>
      <S.Title>Create an account</S.Title>

      <S.Form onSubmit={formik.handleSubmit}>
        <FormControl error={formik.touched.name && !!formik.errors.name}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            id="name"
            label="Name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && !!formik.errors.name && (
            <FormHelperText>{formik.errors.name}</FormHelperText>
          )}
        </FormControl>

        <FormControl error={formik.touched.email && !!formik.errors.email}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            label="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && !!formik.errors.email && (
            <FormHelperText>{formik.errors.email}</FormHelperText>
          )}
        </FormControl>

        <FormControl
          error={formik.touched.password && !!formik.errors.password}
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            label="Password"
            id="password"
            {...formik.getFieldProps("password")}
            type={passwordShown ? "type" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setPasswordShown(prev => !prev);
                  }}
                  edge="end"
                >
                  {passwordShown ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.touched.password && !!formik.errors.password && (
            <FormHelperText>{formik.errors.password}</FormHelperText>
          )}
        </FormControl>

        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </S.Form>
      <Button
        fullWidth
        variant="outlined"
        onClick={() => {
          handleGoogleSignIn();
        }}
        sx={{ gap: "20px" }}
      >
        <FcGoogle size={20} /> Sign up with Google
      </Button>
      <Link href="/login">Sign in</Link>
    </S.Container>
  );
};

export default Page;
