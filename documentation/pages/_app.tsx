import App from "next/app";
import * as React from "react";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";

if (process.env.NODE_ENV !== "production") {
  require("obsidian.css/dist/obsidian.css");
}

import "../global.css";

import * as components from "../components/markdown-map";

export default class MyApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    );
  }
}
