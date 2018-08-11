import Content from '../markdown/postcss.mdx';
import { Article } from '../components/article';

const DESCRIPTION = `
  Through building Obsidian.css, it felt necessary to extend PostCSS with more plugins
  for analysis. Honestly, would encourage anyone to do this, the API is well documented
  and there are dozens of examples to follow.
`;

export default () => (
  <Article size="sm" meta={DESCRIPTION} title="PostCSS Plugins">
    <Content />
  </Article>
);
