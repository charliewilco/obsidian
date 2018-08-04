export const RangeUI = () => (
  <div className="o-Column--6/12 u-p2 u-center u-mxa">
    <label htmlFor="rng" className="u-mb1 u-bl">
      Range
    </label>
    <input
      type="range"
      id="rng"
      name="rng"
      className="c-Range"
      value={5}
      min={1}
      max={10}
    />
  </div>
);
