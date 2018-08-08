import snippet from '!raw-loader!obsidian.css/src/components/obsidian.range.css';

const ProgressUI = () => (
  <div className="u-pt5 u-py3">
    <progress max={100} value={80} className="c-Progress" />
  </div>
);

export { ProgressUI, snippet };
