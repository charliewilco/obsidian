import Icons from '../markdown/objects/icons.mdx';
import UIList from '../markdown/objects/ui-list.mdx';
import Containers from '../markdown/objects/container.mdx';
import Intrinsic from '../markdown/objects/intrinsic.mdx';
import TableUI from '../markdown/objects/responsive-table.mdx';
import MediaBlock from '../markdown/objects/media-block.mdx';
import Flag from '../markdown/objects/flag.mdx';
import Flex from '../markdown/objects/flex.mdx';
import Grid from '../markdown/objects/grid.mdx';
import { Article } from '../components/article';
import { Module } from '../components/module';

const DESCRIPTION = `
    Objects are design patterns that have no inherit visual design,
    like a grid or a media / flag object.
`;

export default () => (
  <Article title="Objects" description={DESCRIPTION}>
    <Module title="Icons" component={Icons} />
    <Module title="Responsive Table UI" component={TableUI} />
    <Module title="UI List" component={UIList} />
    <Module title="Containers" component={Containers} />
    <Module title="Flex Object" component={Flex} />
    <Module title="Grid" component={Grid} />
    <Module title="Intrinsic Object" component={Intrinsic} />
    <Module title="Flag" component={Flag} />
    <Module title="Media Block" component={MediaBlock} />
  </Article>
);
