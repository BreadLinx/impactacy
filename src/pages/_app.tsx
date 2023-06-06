import type { AppProps } from "next/app";
import GlobalStyle from "styles/globalStyles";
import { SessionProvider } from "next-auth/react";
import { NextPageWithLayout } from "types/types";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider, DefaultTheme } from "styled-components";
import lightTheme from "styles/theme/lightTheme";
import createCache from "@emotion/cache";
import { FC } from "react";
import { Toaster } from "react-hot-toast";

const createEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};

const clientSideEmotionCache = createEmotionCache();

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

const MyApp: FC<AppPropsWithLayout> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <CssBaseline />
            <Toaster position="top-right" />
            <SessionProvider session={pageProps.session}>
              {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
          </MuiThemeProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MyApp;
