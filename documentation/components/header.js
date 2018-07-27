import Link from "next/link";

export const Header = () => (
  <header className="c-header u-p2 u-mb6">
    <div className="o-flex o-flex--wrap o-flex--center--h o-flex--j--sb">
      <h1 className="h5 u-w400 u-lh-1 u-py3">
        <Link href="/" passHref>
          <a className="u-mr3">Obsidian.css</a>
        </Link>
      </h1>
      <small className="small u-mono">v2.1.3</small>
    </div>
    <style jsx>{`
      header {
        background: #fff;
        border-bottom: 1px solid hsla(0, 0%, 74%, 0.25);
      }
    `}</style>
  </header>
);
