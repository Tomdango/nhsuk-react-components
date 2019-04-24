import React from 'react';
import PropTypes from 'prop-types';

const InsetText = ({ children, visuallyHiddenText }) => (
  <div className="nhsuk-inset-text">
    <span className="nhsuk-u-visually-hidden">{visuallyHiddenText} </span>
    {children}
  </div>
);

InsetText.propTypes = {
  children: PropTypes.node.isRequired,
  visuallyHiddenText: PropTypes.string
};

InsetText.defaultProps = {
  visuallyHiddenText: 'Information:'
};

export default InsetText;
