import Intro from '../markdown/intro.mdx';
import { Installation } from '../components/installation';
import { LogoNamePlate as Logo } from '../components/logo';
import { Article } from '../components/article';
import { ModuleHeading, ModuleContent } from '../components/module';

export default () => (
  <Article>
    <header className="Stage">
      <Logo name subtitle />
      <Installation />
    </header>
    <section className="Intro o-container o-container--sm o-container--center">
      <Intro />
    </section>
  </Article>
);
