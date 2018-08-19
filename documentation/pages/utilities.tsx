import Fit from '../markdown/utils/fit.mdx';
import LayoutHelpers from '../markdown/utils/layout-helpers.mdx';
import Position from '../markdown/utils/position.mdx';
import Spacing from '../markdown/utils/spacing.mdx';
import Typography from '../markdown/utils/typography.mdx';
import Surfaces from '../markdown/utils/surfaces.mdx';
import { InstallationFull } from '../components/installation'
import { Article } from '../components/article';
import { Module } from '../components/module';

const DESCRIPTION = `
    Utilities are helper classes to modify components and override any existing styles.
`;

export default () => (
  <Article title="Utilities" description={DESCRIPTION}>
    <Module title="Surfaces" component={Surfaces} />
    <Module title="Layout" component={LayoutHelpers} />
    <Module title="Fit" component={Fit} />
    <Module title="Positioning" component={Position} />
    <Module title="Spacing" component={Spacing} />
    <Module title="Typography" component={Typography} />
    <InstallationFull />
  </Article>
);
