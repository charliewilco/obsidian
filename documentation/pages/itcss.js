import Content from '../markdown/itcss.mdx';
import { layers } from '../markdown/layers.json';
import { Article } from '../components/article';
import { DefinitionList } from '../components/definition-list';

const DESCRIPTION = `
  ITCSS is specific approach to architecting CSS in your project. It's used
  as the basis of Obsidian.css.
`;

export default () => (
  <Article size="sm" meta={DESCRIPTION} title="ITCSS">
    <Content />
    <DefinitionList data={layers} />
  </Article>
);
