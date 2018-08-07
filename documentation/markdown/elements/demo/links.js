import snippet from '!raw-loader!obsidian.css/src/elements/obsidian.links.css';

const Links = () => (
  <>
    <a href="#">Normal Anchor tag</a>
    <br />
    <span className="link">Not an Anchor Tag</span>
  </>
);

export { Links, snippet };
