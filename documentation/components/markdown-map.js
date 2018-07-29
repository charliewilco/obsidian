import Prism from 'react-prism';
import 'prismjs';
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css';

export const h3 = props => <h3 className="h5" {...props} />;
export const code = props => <Prism {...props} />;
