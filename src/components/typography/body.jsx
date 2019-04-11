import React from 'react';
import { oneOf, node, string } from 'prop-types';
import stylePropType from 'react-style-proptype';

const Body = ({ size, children, className, style }) => {
  return (
    <p
      className={`nhsuk-body${
        size && size !== 'm' ? `-${size}` : ''
      } ${className}`}
      style={style}
    >
      {children}
    </p>
  );
};
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
