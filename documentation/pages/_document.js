import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html className="u-bg--palegray u-anti">
        <Head>
          <title>Next Obsidian.css</title>
          <link
            href="https://unpkg.com/obsidian.css@2.1.3/dist/obsidian.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
