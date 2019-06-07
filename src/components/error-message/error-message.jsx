import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ErrorMessage = ({ children, visuallyHiddenText, className, ...rest }) => (
  <span className={classNames('nhsuk-error-message', className)} {...rest}>
    <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
    {children}
  </span>
);

ErrorMessage.propTypes = {
  visuallyHiddenText: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error: ',
  className: ''
};

export default ErrorMessage;
