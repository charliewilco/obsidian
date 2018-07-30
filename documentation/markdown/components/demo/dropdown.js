export const Dropdown = () => (
  <>
    <a href="#" className="c-btn c-btn--3">
      Button
    </a>
    <div className="c-dropdown__container u-relative u-py6 u-mb6">
      <div className="u-absolute" style={{ left: 0, top: 0 }}>
        <div
          className="c-dropdown c-dropdown--l u-mxw--fit active"
          style={{ width: '18rem' }}>
          <h3 className="h6 u-p2">
            <a href="/profile/">Heading</a>
          </h3>
          <hr className="u-bg--ltgray" />
          <nav className="c-nav small">
            <ul className="list--reset">
              <li className="u-p2">
                <a href="/preferences/" className="u-gray200">
                  Preferences
                </a>
              </li>
              <li className="u-p2">
                <a href="#" className="u-gray200">
                  Help
                </a>
              </li>
              <li className="u-p2">
                <a href="#" className="u-gray200">
                  Sign Out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </>
);
