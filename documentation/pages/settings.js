import Description from "../markdown/settings/description.mdx";
import MediaQueries from "../markdown/settings/media-queries.mdx";
import GlobalDefaults from "../markdown/settings/global-defaults.mdx";
import Theme from "../markdown/settings/theme.mdx";
import Overriding from "../markdown/settings/overriding.mdx";
import { Article } from "../components/article";

export default () => (
  <Article wrapper title="Settings" className="u-sans">
    <Description />
    <MediaQueries />
    <GlobalDefaults />
    <Theme />
    <Overriding />
  </Article>
);
