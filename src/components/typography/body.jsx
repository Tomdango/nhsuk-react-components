import React from 'react';
import { oneOf, node, string } from 'prop-types';
import classNames from 'classnames';

const Body = ({ size, children, className, ...rest }) => (
  <p
    className={classNames(
      {
        [`nhsuk-body-${size}`]: size && size !== 'm',
        'nhsuk-body': size === 'm'
      },
      className
    )}
    {...rest}
  >
    {children}
  </p>
);

Body.propTypes = {
  size: oneOf(['s', 'm', 'l']),
  children: node.isRequired,
  className: string
};

Body.defaultProps = {
  size: 'm',
  className: ''
};

export default Body;
