export const Footer = () => (
  <footer className="o-Container o-Container--lg o-Container--center u-mb3 u-p3 u-py5@md small">
    <div className="o-Flex o-Flex--wrap o-Flex--center--h o-Flex--j--sb">
      <div className="o-col--4/12@md">
        <h4 className="h6">Obsidian.css</h4>
        <p className="u-sans">
          Obsidian.css is a modular CSS library that focuses on code common to most
          projects.
        </p>
      </div>
      <nav className="o-col--4/12@md">
        <ul className=" list--reset u-w700 u-right">
          <li className="u-inbl u-py2 u-pr2">
            <a href="https://github.com/charlespeters/obsidian">GitHub</a>
          </li>
          <li className="u-inbl u-py2">
            <a href="https://www.npmjs.com/package/obsidian.css">npm</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
