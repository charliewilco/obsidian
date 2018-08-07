import stats from 'obsidian.css/parker.json';

export default () => (
  <ul className="o-Flex o-Flex--j--sb o-UIList u-py3 u-center u-system">
    <li className="u-mr4">
      <span className="h2 u-bl">7.3kb</span>
      <small>Gzip Size</small>
    </li>
    <li className="u-mr4">
      <span className="h2 u-bl">{stats['total-selectors']}</span>
      <small>Selectors</small>
    </li>
    <li>
      <span className="h2 u-bl">{stats['total-rules']}</span>
      <small>Rules</small>
    </li>
  </ul>
);
