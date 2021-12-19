import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="u-bg--palegray u-anti">
        <Head>
          {process.env.NODE_ENV === "production" && (
            <link
              rel="stylesheet"
              href="https://unpkg.com/obsidian.css/dist/obsidian.css"
            />
          )}
          <link rel="icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#147AAB" />
          <meta name="author" content="Charlie Peters" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
