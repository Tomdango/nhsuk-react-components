import React from 'react';
import PropTypes from 'prop-types';
// import './_details.scss';

const Details = ({ children, text, expander }) => (
  <details className={`nhsuk-details ${expander ? 'nhsuk-expander' : ''}`}>
    <summary className="nhsuk-details__summary">
      <span className="nhsuk-details__summary-text">{text}</span>
    </summary>
    <div className="nhsuk-details__text">{children}</div>
  </details>
);

Details.propTypes = {
  expander: PropTypes.bool,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Details.defaultProps = {
  expander: false
};

export default Details;
