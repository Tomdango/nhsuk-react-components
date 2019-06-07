import React from 'react';
import { oneOf, node, string } from 'prop-types';
import classNames from 'classnames';

const Heading = ({ size, children, className, ...rest }) => {
  switch (size) {
    case 'xl':
      return (
        <h1 className={classNames('nhsuk-heading-xl', className)} {...rest}>
          {children}
        </h1>
      );
    case 'l':
      return (
        <h2 className={classNames('nhsuk-heading-l', className)} {...rest}>
          {children}
        </h2>
      );
    case 'm':
      return (
        <h3 className={classNames('nhsuk-heading-m', className)} {...rest}>
          {children}
        </h3>
      );
    case 's':
      return (
        <h4 className={classNames('nhsuk-heading-s', className)} {...rest}>
          {children}
        </h4>
      );
    case 'xs':
      return (
        <h5 className={classNames('nhsuk-heading-xs', className)} {...rest}>
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
  className: string
};

Heading.defaultProps = {
  size: 'xl',
  className: ''
};

export default Heading;
