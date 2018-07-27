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
    name: "",
    href: ""
  },
  {
    name: "",
    href: ""
  },
  {
    name: "",
    href: ""
  },
  {
    name: "",
    href: ""
  }
];

export const Logo = ({ name, subtitle }) => (
  <div className="u-p1">
    <img
      alt="Obsidian.css Logo"
      className="u-bl u-mxa u-mb5"
      src="/static/assets/obsidian-logo@2x.png"
    />
    {name && (
      <>
        <Link href="/">
          <h1 className="h4 u-mb2">Obsidian.css</h1>
        </Link>
        {subtitle && <p className="h6 u-ltgray">A Modular CSS Library</p>}
      </>
    )}
    <style jsx>{`
      h1 {
        color: #d04d36;
        background-image: linear-gradient(#ea8466, #d04d36);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      img {
        max-width: 7rem;
      }
    `}</style>
  </div>
);

export const MoreContentNav = () => (
  <nav className="u-bg--offwhite">
    <h4>Further Reading</h4>
    <ul className="o-UIList o-UIList--dividers u-w400 u-p3">
      {subpages.map((page, idx) => (
        <li className="o-UIList__item" key={idx}>
          <Link href={page.href}>
            <a>{page.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      nav {
        max-width: 12.5rem;
        width: 100%;
        border-right: 1px solid hsla(0, 0%, 74%, 0.25);
      }
    `}</style>
  </nav>
);

export const Nav = () => (
  <nav className="u-bg--offwhite">
    <Logo />
    <ul className="o-UIList o-UIList--dividers u-w400 u-p3">
      {pages.map((page, idx) => (
        <li className="o-UIList__item" key={idx}>
          <Link href={page.href}>
            <a>{page.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      nav {
        max-width: 12.5rem;
        width: 100%;
        border-right: 1px solid hsla(0, 0%, 74%, 0.25);
      }
    `}</style>
  </nav>
);
