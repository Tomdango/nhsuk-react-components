import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ children, text, expander, className }) => (
  <details
    className={`nhsuk-details ${expander ? 'nhsuk-expander' : ''} ${className}`}
  >
    <summary className="nhsuk-details__summary">
      <span className="nhsuk-details__summary-text">{text}</span>
    </summary>
    <div className="nhsuk-details__text">{children}</div>
  </details>
);

Details.propTypes = {
  expander: PropTypes.bool,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Details.defaultProps = {
  expander: false,
  className: ''
};

export default Details;
