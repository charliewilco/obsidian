import { Nav } from './navigation';
import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';

import { version } from 'obsidian.css/package.json';

import 'obsidian.css/dist/obsidian.css';
import '../global.css';

export default ({ children }) => (
  <>
    <Header version={version} />
    <Nav />
    <Main>{children}</Main>
    <Footer />
  </>
);
