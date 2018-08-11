import MediaQueries from '../markdown/settings/media-queries.mdx';
import GlobalDefaults from '../markdown/settings/global-defaults.mdx';
import Theme from '../markdown/settings/theme.mdx';
import Colors from '../markdown/settings/colors.mdx';
import Overriding from '../markdown/settings/overriding.mdx';
import { Article } from '../components/article';
import { Module } from '../components/module';

const DESCRIPTION = `Settings are the basis of Obsidian.css, it contains all the variables like spacing, color and font declarations, as well as media queries and a simple theme.`;

export default () => (
  <Article title="Settings" description={DESCRIPTION}>
    <Module title="Color" component={Colors} />
    <Module title="Media Queries" component={MediaQueries} />
    <Module title="Global Defaults" component={GlobalDefaults} />
    <Module title="Theme" component={Theme} />
    <Module title="Overriding Values" component={Overriding} />
  </Article>
);
