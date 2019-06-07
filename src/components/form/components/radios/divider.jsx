import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Divider = ({ className, children, ...rest }) => (
  <div className={classNames('nhsuk-radios__divider', className)} {...rest}>
    {children}
  </div>
);

Divider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Divider.defaultProps = {
  className: ''
};

export default Divider;
