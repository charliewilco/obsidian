import MediaQueries from '../markdown/settings/media-queries.mdx';
import GlobalDefaults from '../markdown/settings/global-defaults.mdx';
import Theme from '../markdown/settings/theme.mdx';
import Overriding from '../markdown/settings/overriding.mdx';
import { Article } from '../components/article';
import { Module } from '../components/module';

const DESCRIPTION = `Settings are the basis of Obsidian.css, it contains all the variables like spacing, color and font declarations, as well as media queries and a simple theme.`;

export default () => (
  <Article wrapper title="Settings" description={DESCRIPTION} className="u-sans">
    <Module title="Media Queries" component={MediaQueries} />
    <Module title="Global Defaults" component={GlobalDefaults} />
    <Module title="Theme" component={Theme} />
    <Module title="Overriding Values" component={Overriding} />
  </Article>
);
