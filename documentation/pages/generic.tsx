import { Article } from '../components/article';
import { Module } from '../components/module';
import Reset from '../markdown/generic/reset.mdx';

const DESCRIPTION = `
  Generic is the next layer down the inverted triangle, its purpose is provide
  any time of global reset against the existing browser styles. The selectors in
  this level are wide reaching.
`;

export default () => (
  <Article title="Generic" description={DESCRIPTION}>
    <Module title="Reset" component={Reset} />
  </Article>
);
