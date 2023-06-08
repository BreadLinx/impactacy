import type { AppProps } from "next/app";
import GlobalStyle from "styles/globalStyles";
import { NextPageWithLayout } from "types/types";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { lightMuiTheme } from "styles/mui-themes/lightTheme";
import createCache from "@emotion/cache";
import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { lightStyledTheme } from "styles/styled-themes/lightTheme";

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
