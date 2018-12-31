import Prism from 'react-prism';
import 'prismjs';
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css';
import {
  ModuleTable,
  ModuleSubHeading,
  ModuleHeading,
  ModuleContent,
  ModuleList,
  ModuleNumberedList,
  ModuleListItem,
  ModuleElements
} from './module';

export const h3: React.SFC<ModuleElements> = props => <ModuleHeading {...props} />;
export const h4: React.SFC<ModuleElements> = props => <ModuleSubHeading {...props} />;
export const code: React.SFC<ModuleElements> = props => <Prism {...props} />;
export const p: React.SFC<ModuleElements> = props => <ModuleContent {...props} />;
export const table: React.SFC<ModuleElements> = props => <ModuleTable {...props} />;
export const ul: React.SFC<ModuleElements> = props => <ModuleList {...props} />;
export const ol: React.SFC<ModuleElements> = props => <ModuleNumberedList {...props} />;
export const li: React.SFC<ModuleElements> = props => <ModuleListItem {...props} />;
