import Link from "next/link";
import { Logo } from "./logo";

export const Header = () => (
  <header className="c-header u-p2">
    <div className="o-flex o-flex--wrap o-flex--center--h o-flex--j--sb">
      <Logo />
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
