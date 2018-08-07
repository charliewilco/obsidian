import variables from 'obsidian.css/css.json';
import snippet from '!raw-loader!obsidian.css/src/settings/obsidian.colors.css';
import { ColorRamp } from '../../../components/swatch';

const BLACKLIST = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'link',
  'linkHover',
  'uiListBorder',
  'tableLabelColor',
  'btnColor',
  'btnColorHover',
  'formColor',
  'formOffsetColor',
  'formBorderColor',
  'selectArrowColor',
  'rangeColor',
  'rdgColor',
  'rdgOffsetColor',
  'progressColor',
  'dropdownHeader',
  'dropdownBackground',
  'tabsBackground',
  'tabsMarkerColor',
  'tabsMarkerInactiveColor'
];

// console.log([].concat.apply([], validColors(variables).map(v => v.name)));

const validColors = allVariables =>
  Object.keys(allVariables)
    .map(v => allVariables[v].startsWith('#') && { name: v, value: allVariables[v] })
    .filter(Boolean)
    .filter(v => !BLACKLIST.includes(v.name));

const Swatch = ({ color }) => (
  <div className="Swatch u-mb3 u-mx1">
    <div
      className="Swatch__value"
      style={{ height: 100, background: color.value }}
    />
    <div className="Swatch__details u-p1 small">
      <code className="u-bl small">
        --
        {color.name}
      </code>
      <code className="u-bl small">{color.value}</code>
    </div>
  </div>
);

const colors = validColors(variables);

const Colors = () => <ColorRamp colors={colors} />;

export { Colors, snippet };
