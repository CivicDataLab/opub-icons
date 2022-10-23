/* eslint-disable */

import path from 'path';
import {
  appendFile,
  readSvgDirectory,
  resetFile,
  toPascalCase,
  writeFile,
  getCurrentDirPath
} from '../../../scripts/helpers.mjs';

//
const currentDir = getCurrentDirPath(import.meta.url);
const srcDirectory = path.join(currentDir, '../dist');

// Declare type definitions
const typeDefinitions = `\
/// <reference types="react" />
import { SVGAttributes } from 'react'

declare module 'opub-icons'

// Create interface extending SVGProps
export interface SVGIconProps extends Partial<React.SVGProps<SVGSVGElement>> {
    size?: string | number
}

export declare const createReactComponent: (iconName: string, iconNode: any[]) => (props: SVGIconProps) => JSX.Element;

export type Icon = React.FC<SVGIconProps>;

// Generated icons
`;

const ICONS_DIR = path.resolve(currentDir, '../../../icons');
const TYPES_FILE = 'opub-icons.d.ts';

resetFile(TYPES_FILE, srcDirectory);
writeFile(typeDefinitions, TYPES_FILE, srcDirectory);

const svgFiles = readSvgDirectory(ICONS_DIR);

svgFiles.forEach(svgFile => {
  const iconName = path.basename(svgFile, '.svg');
  const componentName = toPascalCase(iconName);

  const exportTypeString = `export declare const ${componentName}: (props: SVGIconProps) => JSX.Element;\n`;
  appendFile(exportTypeString, TYPES_FILE, srcDirectory);
});

console.log(`Generated ${TYPES_FILE} file with`, svgFiles.length, 'icons');
