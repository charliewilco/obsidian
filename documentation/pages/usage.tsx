import Content from '../markdown/usage.mdx';
import { Article } from '../components/article';
import { InstallationFull } from '../components/installation'


const DESCRIPTION = `
  Installation and implementation choices for Obsidian.css
`;

export default () => (
  <Article size="sm" meta={DESCRIPTION} title="Usage">
    <Content />
    <InstallationFull />
  </Article>
);
