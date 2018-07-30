export const SelectUI = () => (
  <div className="o-col--12/12 o-col--6/12@md u-p2">
    <label htmlFor="slct" className="u-gray u-mb1 u-bl">
      Select
    </label>
    <div className="c-select">
      <select className="c-select__elm" name="slct" id="slct">
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        <option value="value3" selected>
          Value 3
        </option>
        <option value="value4">Value 4</option>
        <option value="value5">Value 5</option>
      </select>
    </div>
  </div>
);
