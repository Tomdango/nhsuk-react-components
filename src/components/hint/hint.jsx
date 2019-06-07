import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Hint = ({ children, className, ...rest }) => (
  <span className={classNames('nhsuk-hint', className)} {...rest}>
    {children}
  </span>
);

Hint.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Hint.defaultProps = {
  className: ''
};

export default Hint;
