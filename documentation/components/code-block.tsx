import * as React from 'react';
import Prism from 'react-prism';
import 'prismjs';
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css';

export const CodeBlock: React.SFC<{ snippet: string }> = ({ snippet }) => (
  <pre className="Snippet__code">
    <Prism className="language-css">{snippet}</Prism>
  </pre>
);
