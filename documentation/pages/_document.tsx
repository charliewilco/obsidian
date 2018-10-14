import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html className="u-bg--palegray u-anti">
        <Head>
          <title>Obsidian.css</title>
          {process.env.NODE_ENV === 'production' && (
            <link
              rel="stylesheet"
              href="https://unpkg.com/obsidian.css/dist/obsidian.css"
            />
          )}
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#147AAB" />
          <meta name="author" content="Charles Peters" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
