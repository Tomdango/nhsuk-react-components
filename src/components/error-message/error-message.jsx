import React from 'react';
import PropTypes from 'prop-types';
// import './_error-message.scss';

const ErrorMessage = props => {
  const { children, visuallyHiddenText } = props;
  return (
    <span className="nhsuk-error-message">
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
      {children}
    </span>
  );
};

ErrorMessage.propTypes = {
  visuallyHiddenText: PropTypes.string,
  children: PropTypes.node.isRequired
};

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error: '
};

export default ErrorMessage;
