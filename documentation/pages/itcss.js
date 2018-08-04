import Content from '../markdown/itcss.mdx';
import { layers } from '../markdown/layers.json';
import { Article } from '../components/article';
import { DefinitionList } from '../components/definition-list';

const DESCRIPTION = ``;

export default () => (
  <Article size="sm" description={DESCRIPTION} title="ITCSS">
    <Content />
    <DefinitionList data={layers} />
  </Article>
);
