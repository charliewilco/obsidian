import Content from "../markdown/itcss.mdx";
import { Article } from "../components/article";
import { DefinitionList } from "../components/definition-list";
import { InstallationFull } from "../components/installation";

console.log(Content);

const DESCRIPTION = `
  ITCSS is specific approach to architecting CSS in your project. It's used
  as the basis of Obsidian.css.
`;

export default () => (
  <Article size="sm" meta={DESCRIPTION} title="ITCSS">
    <Content />
    <DefinitionList
      data={[
        {
          title: "Settings",
          description:
            "Settings should contain global and base settings, project media queries, mixins, custom selectors.",
        },
        {
          title: "Generic",
          description:
            "The generic layer is for reset styles, document wide selectors.",
        },
        {
          title: "Elements",
          description:
            "Elements are for styling specific HTML elements and extending responsive styling for elements (for instance [tables](/elements#tables-section)). They're a base style for elements meant to be extended by other styles down the triangle.",
        },
        {
          title: "Objects",
          description:
            "Objects define common reusable patterns. They are have more structure than skin, usually have no visual style (color, background, etc) applied; it's the bare minimum UI. Objects are things like grids or the media object.",
        },
        {
          title: "Components",
          description:
            "Components are visual pieces of UI. They're more complex than objects, often containing many elements.",
        },
        {
          title: "Utilities",
          description:
            "Utilities are helper classes meant to override any default or that extend specific styling. They are single use utilities, meant to only apply a single value.",
        },
      ]}
    />
    <InstallationFull />
  </Article>
);
