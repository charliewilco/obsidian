export const DefinitionListItem = ({ title, description }) => (
  <>
    <dt className="h6 u-w500">{title}</dt>
    <dd className="u-mb4">{description}</dd>
  </>
);
export const DefinitionList = ({ data }) => (
  <dl className="u-pt4 u-pb2">
    {data.map((d, idx) => (
      <DefinitionListItem key={idx} {...d} />
    ))}
  </dl>
);
