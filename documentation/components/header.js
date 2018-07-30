import { Logo } from './logo';

export const Header = ({ version }) => (
  <header className="Header u-p2">
    <div className="o-flex o-flex--wrap o-flex--center--h o-flex--j--sb">
      <Logo />
      <div className="small u-w700">
        <small className="u-mono u-mr3">v{version}</small>
        <a href="https://github.com/charlespeters/obsidian">GitHub</a>
      </div>
    </div>
  </header>
);
