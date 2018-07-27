import { renderToStaticMarkup } from "react-dom/server";
import Prism from "react-prism";
import pretty from "pretty";
import "prismjs";
import "prism-themes/themes/prism-base16-ateliersulphurpool.light.css";
import { Trunk, Branch } from "./branches";

export const NavButton = ({ active, children, onClick }) => (
  <button
    className={active ? "NavButton u-w700 active" : "NavButton u-w700"}
    onClick={onClick}
  >
    {children}
    <style jsx>{`
      .NavButton {
        color: #147aab;
        border: 0;
        border-bottom: 3px solid transparent;
      }

      .NavButton + .NavButton {
        margin-left: 0.5rem;
      }

      .NavButton.active {
        border-bottom: 3px solid currentColor;
      }
    `}</style>
  </button>
);

export const TabbedNavigation = ({ position, goDirectToPosition }) => (
  <nav className="o-flex o-flex--j--sb u-my3">
    <NavButton active={position === 0} onClick={() => goDirectToPosition(0)}>
      Output
    </NavButton>
    <div>
      <NavButton active={position === 1} onClick={() => goDirectToPosition(1)}>
        HTML
      </NavButton>
      <NavButton active={position === 2} onClick={() => goDirectToPosition(2)}>
        CSS
      </NavButton>
    </div>
  </nav>
);

export const Snippet = ({ component: Cx, snippet }) => {
  const html = pretty(renderToStaticMarkup(<Cx />));

  return (
    <div className="Snippet">
      <Trunk navigation={TabbedNavigation}>
        <Branch component={Cx} />
        <Branch
          render={() => (
            <pre>
              <Prism className="language-html">{html}</Prism>
            </pre>
          )}
        />
        <Branch
          render={() => (
            <pre className="Snippet__code">
              <Prism className="language-css">{snippet}</Prism>
            </pre>
          )}
        />
      </Trunk>
      <style jsx>
        {`
          .Snippet {
            width: 100%;
            background: white;
          }

          .Snippet__code {
            display: block;
            height: 100%;
            max-height: 25rem;
            overflow-y: scroll;
          }
        `}
      </style>
    </div>
  );
};
