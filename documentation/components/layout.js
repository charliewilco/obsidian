import React, { Component } from 'react';
import ReactGA from 'react-ga';

import { Nav } from './navigation';
import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';

import { version } from 'obsidian.css/package.json';

import 'obsidian.css/dist/obsidian.css';
import '../global.css';

export default class Layout extends Component {
  static displayName = 'UILayout';

  state = {
    id: 'UA-36412149-3'
  };

  componentDidMount() {
    ReactGA.initialize(this.state.id);
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
