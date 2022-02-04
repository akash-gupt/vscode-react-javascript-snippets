import { rafcp } from '../constants';
import { Placeholders, SnippetMapping } from '../types';

import { exportDefault, innerComponent, react } from './sharedSnippets';

type ComponentMappings = {
  reactArrowFunctionComponentWithPropTypes: rafcp;
};

export type ComponentsSnippet = SnippetMapping<ComponentMappings>;

const reactArrowFunctionComponentWithPropTypes: ComponentsSnippet = {
  key: 'reactArrowFunctionComponentWithPropTypes',
  prefix: 'po-rafcp',
  body: [
    ...react,
    '',
    `export type ${Placeholders.FileName}Props = {}`,
    '',
    `const ${Placeholders.FileName} = (props: ${Placeholders.FileName}Props) => {`,
    ...innerComponent,
    '}',
    '',
    ...exportDefault,
  ],
  description:
    'Creates a React Arrow Function Component with ES7 module system with PropTypes',
};

export default [reactArrowFunctionComponentWithPropTypes];
