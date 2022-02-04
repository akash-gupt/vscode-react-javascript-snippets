import { Placeholders } from '../types';

export const reactComponent = ["import React, { Component } from 'react'", ''];
export const react = ["import React from 'react'", ''];

export const innerComponent = [
  '  return (',
  '    <div>',
  `      ${Placeholders.LastTab}`,
  '    </div>',
  '  )',
];

export const innerComponentReturn = [
  '  render() {',
  '    return (',
  '      <div>',
  `        ${Placeholders.LastTab}`,
  '      </div>',
  '    )',
  '  }',
];

export const exportDefault = [
  '',
  `export default ${Placeholders.FileName}`,
  '',
];
