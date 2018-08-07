import Content from '../markdown/styleguide.mdx';
import { Article } from '../components/article';

const DESCRIPTION = `
  Coding style for Obsidian.css
`;

export default () => (
  <Article size="sm" meta={DESCRIPTION} title="Styleguide">
    <Content />
  </Article>
);
