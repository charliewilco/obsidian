import Link from 'next/link';
import { Logo } from './logo';

export const Header = () => (
  <header className="Header u-p2">
    <div className="o-flex o-flex--wrap o-flex--center--h o-flex--j--sb">
      <Logo />
      <small className="small u-mono">v2.1.3</small>
    </div>
  </header>
);
