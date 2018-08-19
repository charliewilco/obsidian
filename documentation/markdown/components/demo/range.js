import React, { Component } from 'react';
import snippet from '!raw-loader!obsidian.css/src/components/obsidian.range.css';

class RangeUI extends Component {
  state = {
    value: 5
  };

  render() {
    const { value } = this.state;
    return (
      <div className="o-Column--6/12 u-p2 u-center u-mxa">
        <label htmlFor="rng" className="u-mb1 u-bl">
          Range
        </label>
        <input
          type="range"
          id="rng"
          name="rng"
          className="c-Range"
          onChange={e => this.setState({ value: e.target.value })}
          value={value}
          min={1}
          max={10}
        />
      </div>
    );
  }
}

export { RangeUI, snippet };
