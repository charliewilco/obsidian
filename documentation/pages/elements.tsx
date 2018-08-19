import Tables from '../markdown/elements/tables.mdx';
import Lists from '../markdown/elements/lists.mdx';
import Headlines from '../markdown/elements/headlines.mdx';
import BodyText from '../markdown/elements/body-text.mdx';
import Links from '../markdown/elements/links.mdx';
import Forms from '../markdown/elements/forms.mdx';
import Images from '../markdown/elements/images.mdx';
import { Article } from '../components/article';
import { Module } from '../components/module';
import { InstallationFull } from '../components/installation'

const DESCRIPTION = `
  In this layer, elements refer to styles applied the specific type selectors.
  In this implementation there is a few helper classes to accompany these default styles.
`;

export default () => (
  <Article title="Elements" description={DESCRIPTION}>
    <Module title="Tables" component={Tables} />
    <Module title="Lists" component={Lists} />
    <Module title="Headlines" component={Headlines} />
    <Module title="Body Text" component={BodyText} />
    <Module title="Links" component={Links} />
    <Module title="Forms" component={Forms} />
    <Module title="Images" component={Images} />
    <InstallationFull />
  </Article>
);
