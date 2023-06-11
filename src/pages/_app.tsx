import type { AppProps } from "next/app";
import GlobalStyle from "core/styles/global-styles";
import { IUser, NextPageWithLayout } from "@app-types";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { lightMuiTheme } from "core/styles/mui-themes/light.theme";
import createCache from "@emotion/cache";
import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { lightStyledTheme } from "core/styles/styled-themes/light.theme";
import { useRouter } from "next/router";

const createEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};

const clientSideEmotionCache = createEmotionCache();

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
        <ThemeProvider theme={lightStyledTheme}>
          <MuiThemeProvider theme={lightMuiTheme}>
            <GlobalStyle />
            <CssBaseline />
            <Toaster position="bottom-right" />
            {getLayout(<Component {...pageProps} />)}
          </MuiThemeProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MyApp;
