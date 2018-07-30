import CardUI from '../markdown/components/card.mdx';
import Field from '../markdown/components/field.mdx';
import SelectUI from '../markdown/components/select.mdx';
import Range from '../markdown/components/range.mdx';
import Btn from '../markdown/components/btn.mdx';
import InputGroup from '../markdown/components/input-group.mdx';
import RadioGroup from '../markdown/components/radio-group.mdx';
import Progress from '../markdown/components/progress.mdx';
import Tabs from '../markdown/components/tabs.mdx';
import DropdownUI from '../markdown/components/dropdown.mdx';
import { Article } from '../components/article';
import { Module } from '../components/module';

const DESCRIPTION = `
    Components are modules with specific chunks of UI with more visual styling
    than any other layer. The components in Obsidian.css are highly experimental.
`;

export default () => (
  <Article description={DESCRIPTION} title="Components">
    <Module title="Card UI" component={CardUI} />
    <Module title="Field" component={Field} />
    <Module title="Select Custom Input" component={SelectUI} />
    <Module title="Range Input" component={Range} />
    <Module title="Buttons" component={Btn} />
    <Module title="Input Group" component={InputGroup} />
    <Module title="Radio Group" component={RadioGroup} />
    <Module title="Progress" component={Progress} />
    <Module title="Tabbed UI" component={Tabs} />
    <Module title="Dropdown UI" component={DropdownUI} />
  </Article>
);
