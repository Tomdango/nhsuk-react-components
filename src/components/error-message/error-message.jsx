import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const ErrorMessage = ({ children, visuallyHiddenText, className, style }) => (
  <span className={classNames('nhsuk-error-message', className)} style={style}>
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
