import Link from 'next/link';

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

export const MoreContentNav = () => (
  <nav className="u-px2">
    <h4 className="h6">Further Reading</h4>
    <ul className="SubNavList u-w400">
      {subpages.map((page, idx) => (
        <li key={idx}>
          <Link href={page.href}>
            <a>{page.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export const Nav = () => (
  <nav className="NavList u-bg--offwhite u-mb5">
    <ul className="NavList__items u-w400 u-px2 u-py3">
      {pages.map((page, idx) => (
        <li className="NavList__item u-mr3" key={idx}>
          <Link href={page.href}>
            <a>{page.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
