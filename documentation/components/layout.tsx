import * as React from "react";
import { initialize, pageview } from "react-ga";

import { Nav } from "./navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import { Main } from "./main";

export interface ILayoutProps {
  analyticsID: string;
  children: React.ReactNode;
}

export default class Layout extends React.Component<ILayoutProps, {}> {
  static displayName = "UILayout";

  static defaultProps = {
    analyticsID: "UA-36412149-3",
  };

  componentDidMount() {
    initialize(this.props.analyticsID);
    pageview(document.location.pathname);
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <Header version="3.1.0" />
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </>
    );
  }
}
