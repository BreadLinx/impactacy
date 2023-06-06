import { FC, ReactElement, useEffect, useState } from "react";
import { SignInLayout } from "layouts/SignInLayout/SignInLayout";
import { NextPageWithLayout } from "types/types";
import * as S from "@pages-styles/login/styles";
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
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "lib/next-auth/options";
import axios from "axios";
import { toast } from "react-hot-toast";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("Password required"),
});

interface PageProps {}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session?.user.email) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Page: NextPageWithLayout<PageProps> = ({}) => {
  const router = useRouter();

  const { error } = router.query;
  useEffect(() => {
    if (error) {
      toast.error(error as string);
    }
  }, [error]);

  const handleGoogleSignIn = async () => {
    // signIn("google", { callbackUrl: "http://localhost:3000" });
    // const result = await axios.get("http://localhost:5000/signin/google");
    // console.log(result);
    router.push("http://localhost:5000/signin/google");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async values => {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });

      if (result?.ok) {
        router.push(result.url || "/");
      }
    },
    validationSchema: SigninSchema,
  });

  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <S.Container>
      <S.Title>Sign in</S.Title>
      <S.Form onSubmit={formik.handleSubmit}>
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
          Sign in
        </Button>
      </S.Form>
      <Button
        fullWidth
        variant="outlined"
        onClick={handleGoogleSignIn}
        sx={{ gap: "20px" }}
      >
        <FcGoogle size={20} /> Sign in with Google
      </Button>

      <Link href="/signup">Sign up</Link>
    </S.Container>
  );
};

export default Page;
