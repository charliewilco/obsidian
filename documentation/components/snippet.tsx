import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server';
import Prism from 'react-prism';
import cx from 'classnames';
import pretty from 'pretty';
import 'prismjs';
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css';
import { Trunk, Branch, NavActions } from './branches';

export interface INavButton {
  active: boolean,
  children: React.ReactNode,
  onClick: () => void
}

export const NavButton: React.SFC<INavButton> = ({ active, children, onClick }) => (
  <button className={cx('NavButton u-w700 u-py2', { active })} onClick={onClick}>
    {children}
  </button>
);


export class TabbedNavigation extends React.Component<NavActions, {}> {
  render() {
    const { position, goDirectToPosition } = this.props
    return (
      <nav className="o-Flex o-Flex--j--sb u-my3">
        <NavButton active={position === 0} onClick={() => goDirectToPosition(0)}>
          Output
        </NavButton>
        <div>
          <NavButton active={position === 1} onClick={() => goDirectToPosition(1)}>
            HTML
          </NavButton>
          <NavButton active={position === 2} onClick={() => goDirectToPosition(2)}>
            CSS
          </NavButton>
        </div>
      </nav>
    );
  }
}

interface ISnippet {
  component: React.ComponentType<any>,
  snippet: string
}

export const Snippet: React.SFC<ISnippet> = ({ component: Cx, snippet }) => (
  <div className="Snippet u-mt4">
    <Trunk navigation={TabbedNavigation}>
      <Branch component={Cx} />
      <Branch
        render={() => (
          <pre>
            <Prism className="language-html">
              {pretty(renderToStaticMarkup(<Cx />))}
            </Prism>
          </pre>
        )}
      />
      <Branch
        render={() => (
          <pre className="Snippet__code">
            <Prism className="language-css">{snippet}</Prism>
          </pre>
        )}
      />
    </Trunk>
  </div>
);
