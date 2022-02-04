import { writeFile } from 'fs';

import {
  extensionConfig,
  parseSnippetToBody,
  replaceSnippetPlaceholders,
} from './helpers';
import componentsSnippets, {
  ComponentsSnippet,
} from './sourceSnippets/components';
import consoleSnippets, { ConsoleSnippet } from './sourceSnippets/console';
import reactNativeSnippets, {
  ReactNativeSnippet,
} from './sourceSnippets/reactNative';

export type SnippetKeys =
  | ReactNativeSnippet['key']
  | ComponentsSnippet['key']
  | ConsoleSnippet['key'];

export type Snippet = ReactNativeSnippet | ComponentsSnippet | ConsoleSnippet;

export type Snippets = {
  [key in SnippetKeys]: Snippet;
};

const getSnippets = () => {
  const { languageScopes } = extensionConfig();

  const snippets = [
    ...componentsSnippets,
    ...consoleSnippets,
    ...reactNativeSnippets,
  ].reduce((acc, snippet) => {
    acc[snippet.key] = Object.assign(snippet, {
      body: parseSnippetToBody(snippet),
      scope: languageScopes,
    });
    return acc;
  }, {} as Snippets);

  return replaceSnippetPlaceholders(JSON.stringify(snippets, null, 2));
};

export const generateSnippets = () =>
  new Promise((resolve) => {
    const jsonSnippets = getSnippets();
    writeFile(__dirname + '/snippets/generated.json', jsonSnippets, (error) => {
      if (error) {
        console.error(error);
      }
      return resolve(true);
    });
  });
