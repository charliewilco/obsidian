import Content from '../markdown/naming-classes.mdx';
import { Article } from '../components/article';
import { InstallationFull } from '../components/installation';

const DESCRIPTION = `
  A guide to naming classes in Obsidian.css
`;

export default () => (
  <Article size="sm" meta={DESCRIPTION} title="Naming Classes">
    <Content />
    <InstallationFull />
  </Article>
);
