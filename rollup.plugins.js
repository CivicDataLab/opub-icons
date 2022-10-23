/* eslint-disable import/no-extraneous-dependencies */
import babel from '@rollup/plugin-babel';
import bundleSize from '@atomico/rollup-plugin-sizes';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';

const plugins = (pkg, minify) =>
  [
    replace({
      'icons = {}': 'icons = allIcons',
      delimiters: ['', ''],
      preventAssignment: false
    }),
    resolve(),
    commonJS({
      include: 'node_modules/**'
    }),
    babel({
      babelHelpers: 'bundled'
    }),
    minify && terser(),
    bundleSize()
  ].filter(Boolean);

export default plugins;
