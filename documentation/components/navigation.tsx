import Link from 'next/link';
import { withRouter } from 'next/router';

interface NavigationPage {
  name: string;
  href: string; 
}

interface ILinkProps extends NavigationPage {
  active: string;
}

export const pages: NavigationPage[] = [
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

export const subpages: NavigationPage[] = [
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


const ActiveSubLink: React.SFC<ILinkProps> = ({ active, name, href }) => (
  <Link href={href}>
    <a className={active === href ? 'u-w700' : ''}>{name}</a>
  </Link>
);

const ActiveLink: React.SFC<ILinkProps> = ({ active, name, href }) => {
  return (
    <Link href={href}>
      <a
        className={
          active === href
            ? 'NavList__link u-px2 u-py3 active'
            : 'NavList__link u-px2 u-py3'
        }>
        {name}
      </a>
    </Link>
  );
};

export const MoreContentNav = withRouter(({ router: { route } }) => (
  <nav className="u-px2 u-center">
    <hr className="Rule" />
    <h4 className="h6 u-mb3">Further Reading</h4>
    <ul className="SubNavList u-w400">
      {subpages.map(({ name, href }, idx) => (
        <li className="u-inbl u-mx2" key={idx}>
          <ActiveSubLink active={route} name={name} href={href} />
        </li>
      ))}
    </ul>
  </nav>
));

export const Nav = withRouter(({ router: { route } }) => (
  <nav className="NavList u-bg--offwhite u-mb5">
    <ul className="NavList__items u-w400">
      {pages.map(({ name, href }, idx) => (
        <li className="NavList__item u-mr3" key={idx}>
          <ActiveLink active={route} name={name} href={href} />
        </li>
      ))}
    </ul>
  </nav>
));
