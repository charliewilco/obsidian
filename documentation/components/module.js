export const Module = ({ title, component: Cx }) => (
  <section className="Pane u-mb3 u-pt3 u-px3 u-pb4">
    <h3 className="h5 u-mb4">{title}</h3>
    <Cx />
  </section>
);
