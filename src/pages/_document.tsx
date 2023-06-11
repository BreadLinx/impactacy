import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import createEmotionServer from "@emotion/server/create-instance";
import { Children } from "react";
import createCache from "@emotion/cache";

const createEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};

export default class MyDocument extends Document {
  static async getInitialProps(contex: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = contex.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    try {
      contex.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => props =>
            sheet.collectStyles(<App emotionCache={cache} {...props} />),
        });

      const initialProps = await Document.getInitialProps(contex);
      const emotionStyles = extractCriticalToChunks(initialProps.html);
      const emotionStyleTags = emotionStyles.styles.map(style => (
        <style
          data-emotion={`${style.key} ${style.ids.join(" ")}`}
          key={style.key}
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      ));

      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          sheet.getStyleElement(),
          ...Children.toArray(initialProps.styles),
          ...emotionStyleTags,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
