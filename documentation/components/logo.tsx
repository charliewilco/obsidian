import Link from 'next/link';

export const Logo = () => (
  <div className="o-Flex o-Flex--center--h u-p1">
    <img
      alt="Obsidian.css Logo"
      className="Logo Logo--sm u-bl u-mr3"
      src="/static/assets/obsidian-logo@2x.png"
    />
    <>
      <Link href="/" passHref>
        <a>
          <h1 className="GradientTitle h6 u-m0">Obsidian.css</h1>
        </a>
      </Link>
    </>
  </div>
);

export const LogoNamePlate = () => (
  <div className="u-p1">
    <img
      alt="Obsidian.css Logo"
      className="Logo Logo--md u-bl u-mxa u-mb5"
      src="/static/assets/obsidian-logo@2x.png"
    />
    <>
      <h1 className="GradientTitle h4 u-mb2">Obsidian.css</h1>
      <p className="h6 u-ltgray">A Modular CSS Library</p>
    </>
  </div>
);
