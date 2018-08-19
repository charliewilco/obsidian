export const Installation = () => (
  <div className="o-Container--xs">
    <figure className="highlight">
      <pre className=" language-shell">
        <code className="language-shell h5 u-mono" data-lang="shell">
          yarn add obsidian.css
        </code>
      </pre>
    </figure>
  </div>
);

export const InstallationFull = () => (
  <>
    <hr className="Rule" />
    <div className="o-Container o-Container--xs o-Container--center Stage">
      <h4 className="h6 u-w700 u-mb3">Install Obsidian.css</h4>
      <figure className="highlight">
        <pre className=" language-shell">
          <code className="language-shell" data-lang="shell">
            yarn add obsidian.css
          </code>
        </pre>
      </figure>
    </div>
  </>
);
