import Link from "next/link";

export const pages = [
  {
    name: "Settings",
    href: "/settings"
  },
  {
    name: "Generic",
    href: "/generic"
  },
  {
    name: "Elements",
    href: "/elements"
  },
  {
    name: "Objects",
    href: "/objects"
  },
  {
    name: "Components",
    href: "/components"
  },

  {
    name: "Utilities",
    href: "/utilities"
  }
];

export const subpages = [
  {
    name: "Usage",
    href: "/usage"
  },
  {
    name: "Styleguide",
    href: "/styleguide"
  },
  {
    name: "Naming Classes",
    href: "/naming-classes"
  },
  {
    name: "ITCSS",
    href: "/itcss"
  }
];

export const MoreContentNav = () => (
  <nav className="u-p2">
    <h4 className="h6">Further Reading</h4>
    <ul className="o-UIList o-UIList--dividers u-w400">
      {subpages.map((page, idx) => (
        <li className="o-UIList__item" key={idx}>
          <Link href={page.href}>
            <a>{page.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      ul {
        margin: 0;
        list-style: inside none;
      }
    `}</style>
  </nav>
);

export const Nav = () => (
  <nav className="u-bg--offwhite u-mb5">
    <ul className="o-UIList o-UIList--dividers u-w400 u-px2 u-py3">
      {pages.map((page, idx) => (
        <li className="u-mr3" key={idx}>
          <Link href={page.href}>
            <a>{page.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      ul {
        font-family: inherit;
        display: block;
        list-style: inside none;
      }

      li {
        display: inline-block;
      }

      nav {
        border-bottom: 1px solid hsla(0, 0%, 74%, 0.25);
      }
    `}</style>
  </nav>
);
