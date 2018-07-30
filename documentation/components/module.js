export const ModuleHeading = ({ children }) => (
  <h3 className="h5 u-w400 u-mb3">{children}</h3>
);

export const ModuleTable = ({ children }) => (
  <table className="ModuleTable u-w400">{children}</table>
);

export const ModuleContent = ({ children }) => (
  <p className="u-sans u-w400">{children}</p>
);

export const Module = ({ title, component: Cx }) => (
  <section className="Pane u-mb4 u-pt3 u-px3 u-pb4">
    <ModuleHeading>{title}</ModuleHeading>
    <Cx LayoutProps={{ className: 'Pane' }} />
  </section>
);
