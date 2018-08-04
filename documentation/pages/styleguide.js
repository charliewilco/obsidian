import Content from '../markdown/styleguide.mdx';
import { Article } from '../components/article';

const DESCRIPTION = ``;

export default () => (
  <Article size="sm" description={DESCRIPTION} title="Styleguide">
    <Content />
  </Article>
);
