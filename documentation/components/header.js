import { Logo } from './logo';

export const Header = ({ version }) => (
  <header className="Header u-p2">
    <div className="o-Flex o-Flex--wrap o-Flex--center--h o-Flex--j--sb">
      <Logo />
      <div className="small u-w700">
        <small className="u-mono u-mr3">v{version}</small>
        <a href="https://github.com/charlespeters/obsidian">GitHub</a>
      </div>
    </div>
  </header>
);
