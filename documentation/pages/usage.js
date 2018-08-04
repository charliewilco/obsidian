import Content from '../markdown/usage.mdx';
import { Article } from '../components/article';

const DESCRIPTION = ``;

export default () => (
  <Article size="sm" description={DESCRIPTION} title="Usage">
    <Content />
  </Article>
);
