import Content from '../markdown/styleguide.mdx';
import { Article } from '../components/article';
import { InstallationFull } from '../components/installation';

const DESCRIPTION = `
  Coding style for Obsidian.css
`;

export default () => (
  <Article size="sm" meta={DESCRIPTION} title="Styleguide">
    <Content />
    <InstallationFull />
  </Article>
);
