import * as React from 'react';

export interface IDefinitionProps { 
  title: string,
  description?: string
}

export const DefinitionListItem: React.SFC<IDefinitionProps> = ({ title, description }) => (
  <>
    <dt className="h6 u-w400 u-mb1">{title}</dt>
    <dd className="u-mb4">{description}</dd>
  </>
);
export const DefinitionList: React.SFC<{ data: IDefinitionProps[] }> = ({ data }) => (
  <dl className="u-pt4 u-pb2">
    {data.map((d, idx) => (
      <DefinitionListItem key={idx} {...d} />
    ))}
  </dl>
);
