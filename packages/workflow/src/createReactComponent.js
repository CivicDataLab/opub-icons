/* eslint-disable */
import { forwardRef, createElement } from 'react';
import PropTypes from 'prop-types';
import defaultAttributes from './defaultAttributes';

/**
 * Converts string to KebabCase
 * Copied from scripts/helper. If anyone knows how to properly import it here
 * then please fix it.
 *
 * @param {string} string
 * @returns {string} A kebabized string
 */
export const toKebabCase = string => string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export default (iconName, iconNode) => {
  const Component = forwardRef(({ fill = 'currentColor', size = 18, children, ...rest }, ref) =>
    createElement(
      'svg',
      {
        ref,
        ...defaultAttributes,
        fill,
        width: size,
        className: `opub-icons opub-icons-${toKebabCase(iconName)}`,
        ...rest
      },
      [...iconNode.map(([tag, attrs]) => createElement(tag, attrs)), ...(children || [])]
    )
  );

  Component.propTypes = {
    fill: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  Component.displayName = `${iconName}`;

  return Component;
};
