import { Nav } from './navigation';
import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';

import { version } from 'obsidian.css/package.json';

export default ({ children }) => (
  <>
    <Header version={version} />
    <Nav />
    <Main>{children}</Main>
    <Footer />
  </>
);
