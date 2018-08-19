import Content from '../markdown/itcss.mdx';
import { Article } from '../components/article';
import { InstallationFull } from '../components/installation'

const DESCRIPTION = `
  ITCSS is specific approach to architecting CSS in your project. It's used
  as the basis of Obsidian.css.
`;

export default () => (
  <Article size="sm" meta={DESCRIPTION} title="ITCSS">
    <Content />
    <InstallationFull />
  </Article>
);
