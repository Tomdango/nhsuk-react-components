import React from 'react';
import PropTypes from 'prop-types';
// import './_error-summary.scss';

const ErrorItem = ({ href, children }) => (
  <li>
    <a href={href}>{children}</a>
  </li>
);

const ErrorSummary = ({ title, description, children }) => (
  <div
    className="nhsuk-error-summary"
    aria-labelledby="error-summary-title"
    role="alert"
    tabIndex="-1"
    data-module="error-summary"
  >
    <h2 className="nhsuk-error-summary__title" id="error-summary-title">
      {title}
    </h2>
    <div className="nhsuk-error-summary__body">
      {description ? <p>{description}</p> : null}
      <ul className="nhsuk-list nhsuk-error-summary__list">{children}</ul>
    </div>
  </div>
);

ErrorItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

ErrorItem.defaultProps = {
  href: '#'
};

ErrorSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired
};

ErrorSummary.defaultProps = {
  description: ''
};

ErrorSummary.ErrorItem = ErrorItem;

export default ErrorSummary;
