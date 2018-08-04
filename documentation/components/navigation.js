import Link from 'next/link';
import { withRouter } from 'next/router';

export const pages = [
  {
    name: 'Settings',
    href: '/settings'
  },
  {
    name: 'Generic',
    href: '/generic'
  },
  {
    name: 'Elements',
    href: '/elements'
  },
  {
    name: 'Objects',
    href: '/objects'
  },
  {
    name: 'Components',
    href: '/components'
  },

  {
    name: 'Utilities',
    href: '/utilities'
  },

  {
    name: 'PostCSS Plugins',
    href: '/postcss'
  }
];

export const subpages = [
  {
    name: 'Usage',
    href: '/usage'
  },
  {
    name: 'Styleguide',
    href: '/styleguide'
  },
  {
    name: 'Naming Classes',
    href: '/naming-classes'
  },
  {
    name: 'ITCSS',
    href: '/itcss'
  }
];

export const ActiveSubLink = withRouter(({ router: { route }, name, href }) => (
  <Link href={href}>
    <a className={route === href ? 'u-w700' : ''}>{name}</a>
  </Link>
));

export const ActiveLink = withRouter(({ router: { route }, name, href }) => (
  <Link href={href}>
    <a
      className={
        route === href
          ? 'NavList__link u-px2 u-py3 active'
          : 'NavList__link u-px2 u-py3'
      }>
      {name}
    </a>
  </Link>
));

export const MoreContentNav = () => (
  <nav className="u-px2 u-center">
    <hr className="Rule" />
    <h4 className="h6 u-mb3">Further Reading</h4>
    <ul className="SubNavList u-w400">
      {subpages.map((page, idx) => (
        <li className="u-inbl u-mx2" key={idx}>
          <ActiveSubLink {...page} />
        </li>
      ))}
    </ul>
  </nav>
);

export const Nav = () => (
  <nav className="NavList u-bg--offwhite u-mb5">
    <ul className="NavList__items u-w400">
      {pages.map((page, idx) => (
        <li className="NavList__item u-mr3" key={idx}>
          <ActiveLink {...page} />
        </li>
      ))}
    </ul>
  </nav>
);
