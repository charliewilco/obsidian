import Prism from 'react-prism';
import 'prismjs';
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css';
import { ModuleTable, ModuleHeading, ModuleContent } from './module';

export const h3 = props => <ModuleHeading {...props} />;
export const code = props => <Prism {...props} />;
export const p = props => <ModuleContent {...props} />;
export const table = props => <ModuleTable {...props} />;
