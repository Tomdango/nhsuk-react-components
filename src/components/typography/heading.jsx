import React from 'react';
import { oneOf, node, string } from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Heading = ({ size, children, className, style }) => {
  switch (size) {
    case 'xl':
      return (
        <h1 className={classNames('nhsuk-heading-xl', className)} style={style}>
          {children}
        </h1>
      );
    case 'l':
      return (
        <h2 className={classNames('nhsuk-heading-l', className)} style={style}>
          {children}
        </h2>
      );
    case 'm':
      return (
        <h3 className={classNames('nhsuk-heading-m', className)} style={style}>
          {children}
        </h3>
      );
    case 's':
      return (
        <h4 className={classNames('nhsuk-heading-s', className)} style={style}>
          {children}
        </h4>
      );
    case 'xs':
      return (
        <h5 className={classNames('nhsuk-heading-xs', className)} style={style}>
          {children}
        </h5>
      );
    default:
      return null;
  }
};

Heading.propTypes = {
  size: oneOf(['xl', 'l', 'm', 's', 'xs']),
  children: node.isRequired,
  className: string,
  style: stylePropType
};

Heading.defaultProps = {
  size: 'xl',
  className: '',
  style: {}
};

export default Heading;
