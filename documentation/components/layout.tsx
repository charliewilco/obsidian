import * as React from 'react';
import ReactGA from 'react-ga';

import { Nav } from './navigation';
import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';

import { version } from 'obsidian.css/package.json';

import 'obsidian.css/dist/obsidian.css';
import '../global.css';

export interface ILayoutProps {
  analyticsID: string;
  children: React.ReactNode;
}

export default class Layout extends React.Component<ILayoutProps, void> {
  static displayName = 'UILayout';

  static defaultProps = {
    analyticsID: 'UA-36412149-3'
  };

  componentDidMount() {
    ReactGA.initialize(this.props.analyticsID);
    ReactGA.pageview(document.location.pathname);
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <Header version={version} />
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </>
    );
  }
}
