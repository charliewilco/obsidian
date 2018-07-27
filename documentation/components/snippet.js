import { renderToStaticMarkup } from "react-dom/server";
import Prism from "react-prism";
import pretty from "pretty";
import "prismjs";
import "prism-themes/themes/prism-base16-ateliersulphurpool.light.css";
import { Trunk, Branch } from "./branches";

export const TabbedNavigation = ({ goDirectToPosition }) => (
  <nav className="o-flex o-flex--j--sb" style={{ display: "flex" }}>
    <button onClick={() => goDirectToPosition(2)}>Output</button>
    <div>
      <button onClick={() => goDirectToPosition(0)}>HTML</button>
      <button onClick={() => goDirectToPosition(1)}>CSS</button>
    </div>
    <style jsx>{`
      nav {
      }
      button {
      }
    `}</style>
  </nav>
);

export const Snippet = ({ component: Cx, snippet }) => {
  const html = pretty(renderToStaticMarkup(<Cx />));
  return (
    <div className="Snippet">
      <Trunk navigation={TabbedNavigation}>
        <Branch
          render={() => (
            <pre>
              <Prism className="language-html">{html}</Prism>
            </pre>
          )}
        />
        <Branch
          render={() => (
            <pre>
              <Prism className="language-css">{snippet}</Prism>
            </pre>
          )}
        />
        <Branch component={Cx} />
      </Trunk>
      <style jsx>
        {`
          .Snippet {
            width: 100%;
            max-width: 40rem;
            background: white;
          }

          pre {
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
