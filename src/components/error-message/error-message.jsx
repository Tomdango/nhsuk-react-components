import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const ErrorMessage = ({ children, visuallyHiddenText, className, style }) => (
  <span className={`nhsuk-error-message ${className}`} style={style}>
    <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
    {children}
  </span>
);

ErrorMessage.propTypes = {
  visuallyHiddenText: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error: ',
  className: '',
  style: {}
};

export default ErrorMessage;
