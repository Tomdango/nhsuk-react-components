import React from 'react';
import { oneOf, node, string } from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Body = ({ size, children, className, style }) => (
  <p
    className={classNames(
      {
        [`nhsuk-body-${size}`]: size && size !== 'm',
        'nhsuk-body': size === 'm'
      },
      className
    )}
    style={style}
  >
    {children}
  </p>
);

Body.propTypes = {
  size: oneOf(['s', 'm', 'l']),
  children: node.isRequired,
  style: stylePropType,
  className: string
};

Body.defaultProps = {
  size: 'm',
  style: {},
  className: ''
};

export default Body;
