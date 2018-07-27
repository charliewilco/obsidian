import Link from "next/link";

export const Logo = () => (
  <div className="o-flex o-flex--center--h u-p1">
    <img
      alt="Obsidian.css Logo"
      className="u-bl u-mr3"
      src="/static/assets/obsidian-logo@2x.png"
    />
    <>
      <Link href="/" passHref>
        <a>
          <h1 className="h6 u-m0">Obsidian.css</h1>
        </a>
      </Link>
    </>
    <style jsx>{`
      a h1 {
        color: #d04d36;
        background-image: linear-gradient(#ea8466, #d04d36);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      img {
        max-width: 3rem;
      }
    `}</style>
  </div>
);

export const LogoNamePlate = () => (
  <div className="u-p1">
    <img
      alt="Obsidian.css Logo"
      className="u-bl u-mxa u-mb5"
      src="/static/assets/obsidian-logo@2x.png"
    />
    <>
      <h1 className="h4 u-mb2">Obsidian.css</h1>
      <p className="h6 u-ltgray">A Modular CSS Library</p>
    </>
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
