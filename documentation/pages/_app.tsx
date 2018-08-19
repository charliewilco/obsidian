import App, { Container } from 'next/app';
import * as React from 'react';
import Layout from '../components/layout';
import MDXProvider from '@mdx-js/tag/dist/mdx-provider';

import * as components from '../components/markdown-map';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <MDXProvider components={components}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </Container>
    );
  }
}
