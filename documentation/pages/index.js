import Intro from '../markdown/intro.mdx';
import { Installation } from '../components/installation';
import { LogoNamePlate as Logo } from '../components/logo';
import { Article } from '../components/article';

const DESCRIPTION = `Obsidian.css is a modular CSS library that focuses on code common to most projects.`;

export default () => (
  <Article meta={DESCRIPTION}>
    <header className="Stage">
      <Logo name subtitle />
      <Installation />
    </header>
    <section className="Intro o-Container o-Container--sm o-Container--center">
      <Intro />
    </section>
  </Article>
);
