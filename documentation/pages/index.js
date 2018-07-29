import Intro from '../markdown/intro.mdx';
import { Installation } from '../components/installation';
import { LogoNamePlate as Logo } from '../components/logo';
import { Article } from '../components/article';

export default () => (
  <Article className="u-serif" spaced nav={false}>
    <header className="Stage">
      <Logo name subtitle />
      <Installation />
    </header>
    <section className="Intro">
      <Intro />
    </section>
  </Article>
);
