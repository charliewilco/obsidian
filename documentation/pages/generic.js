import { Article } from "../components/article";
import Reset from "../markdown/generic/reset.mdx";

export default () => (
  <Article title="Generic" wrapper className="u-sans">
    <p className="h6">
      Generic is the next layer down the inverted triangle, its purpose is
      provide any time of global reset against the existing browser styles. The
      selectors in this level are wide reaching.
    </p>
    <Reset />
  </Article>
);
