import Document, { Head, Main, NextScript } from 'next/document';
import 'obsidian.css/dist/obsidian.css';
import '../global.css';

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
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
