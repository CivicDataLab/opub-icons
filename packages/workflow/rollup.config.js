// eslint-disable-next-line import/extensions
import plugins from '../../rollup.plugins';
import pkg from './package.json';

const packageName = 'OpubIcons Workflow';
const outputFileName = 'opub-icons';
const outputDir = `dist`;
const inputs = [`src/opub-icons.js`];
const bundles = [
  {
    format: 'umd',
    inputs,
    outputDir,
    minify: true
  },
  {
    format: 'umd',
    inputs,
    outputDir
  },
  {
    format: 'cjs',
    inputs,
    outputDir
  }
];

const configs = bundles
  .map(({ inputs, outputDir, format, minify }) =>
    inputs.map(input => ({
      input,
      plugins: plugins(pkg, minify),
      external: ['react', 'prop-types'],
      output: {
        name: packageName,
        file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.js`,
        format,
        sourcemap: true,
        globals: {
          react: 'react',
          'prop-types': 'PropTypes'
        }
      }
    }))
  )
  .flat();

export default configs;
