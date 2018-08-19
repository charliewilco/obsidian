import * as React from 'react'

interface ModuleElements {
  children: React.ReactNode
}

export const ModuleHeading: React.SFC<ModuleElements> = ({ children }) => (
  <h3 className="h5 u-w400 u-mb3">{children}</h3>
);

export const ModuleSubHeading: React.SFC<ModuleElements> = ({ children }) => (
  <h4 className="h6 u-w400 u-mb3">{children}</h4>
);

export const ModuleTable: React.SFC<ModuleElements> = ({ children }) => (
  <table className="ModuleTable u-w400">{children}</table>
);

export const ModuleList: React.SFC<ModuleElements> = ({ children }) => <ul className="u-mb3">{children}</ul>;

export const ModuleNumberedList: React.SFC<ModuleElements> = ({ children }) => (
  <ol className="u-mb3">{children}</ol>
);

export const ModuleListItem: React.SFC<ModuleElements> = ({ children }) => (
  <li className="u-mb1">{children}</li>
);

export const ModuleContent: React.SFC<ModuleElements> = ({ children }) => (
  <p className="u-sans u-w400 u-mb3">{children}</p>
);


interface IModuleProps {
  title: string,
  component: new (props: any) => React.Component;
}

export const Module: React.SFC<IModuleProps> = ({ title, component: Cx }) => (
  <section className="Pane u-mb4 u-pt3 u-px3 u-pb4">
    <ModuleHeading>{title}</ModuleHeading>
    <Cx LayoutProps={{ className: 'Pane' }} />
  </section>
);
