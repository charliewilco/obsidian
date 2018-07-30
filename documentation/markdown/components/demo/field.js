export const Field = () => (
  <section className="o-flex o-flex--wrap">
    <div className="o-col--12/12 o-col--6/12@md u-p2">
      <label htmlFor="ti" className="u-gray u-mb1 u-bl">
        Text Field
      </label>
      <input
        type="text"
        className="c-field"
        id="ti"
        name="ti"
        defaultValue
        placeholder="Text"
      />
    </div>
    <div className="o-col--12/12 o-col--6/12@md u-p2">
      <label htmlFor="num" className="u-gray u-mb1 u-bl">
        Number Field
      </label>
      <input
        type="number"
        className="c-field"
        id="num"
        name="num"
        defaultValue
        placeholder="0-9"
      />
    </div>
    <div className="o-col--12/12 o-col--6/12@md u-p2">
      <label htmlFor="tid" className="u-gray u-mb1 u-bl">
        Disabled Field
      </label>
      <input
        type="text"
        className="c-field"
        id="tid"
        name="tid"
        defaultValue
        disabled
        placeholder="Disabled"
      />
    </div>
    <div className="o-col--12/12 u-p2">
      <label htmlFor="txt" className="u-gray u-mb1 u-bl">
        Textarea Field
      </label>
      <textarea
        id="txt"
        name="txt"
        rows={8}
        cols={40}
        className="c-field c-field--text"
        defaultValue={''}
      />
    </div>
  </section>
);
