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
  ModuleListItem
} from './module';

export const h3 = props => <ModuleHeading {...props} />;
export const h4 = props => <ModuleSubHeading {...props} />;
export const code = props => <Prism {...props} />;
export const p = props => <ModuleContent {...props} />;
export const table = props => <ModuleTable {...props} />;
export const ul = props => <ModuleList {...props} />;
export const ol = props => <ModuleNumberedList {...props} />;
export const li = props => <ModuleListItem {...props} />;
