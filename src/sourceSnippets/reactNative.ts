import { rnfes } from '../constants';
import { Placeholders, SnippetMapping } from '../types';

import { exportDefault, react } from './sharedSnippets';

type ReactNativeMapping = {
  reactNativeFunctionalExportComponentWithStyles: rnfes;
};

export type ReactNativeSnippet = SnippetMapping<ReactNativeMapping>;

const reactNativeStylesSnippet = ['const styles = StyleSheet.create({})', ''];

const reactNativeReturn = [
  '  return (',
  '    <View>',
  '      <Text>$0</Text>',
  '    </View>',
  '  )',
];

const reactNativeFunctionalExportComponentWithStyles: ReactNativeSnippet = {
  key: 'reactNativeFunctionalExportComponentWithStyles',
  prefix: 'po-rnfes',
  body: [
    "import { StyleSheet, Text, View } from 'react-native'",
    ...react,
    '',
    `export type ${Placeholders.FileName}Props = {}`,
    '',
    `const ${Placeholders.FileName} = (props: ${Placeholders.FileName}Props) => {`,
    ...reactNativeReturn,
    '}',
    ...exportDefault,
    '',
    ...reactNativeStylesSnippet,
  ],
};

export default [reactNativeFunctionalExportComponentWithStyles];
