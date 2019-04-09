import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const ErrorItem = ({ href, children, className, style, onClick }) => (
  <li className={className} style={style}>
    <a href={href} onClick={onClick}>
      {children}
    </a>
  </li>
);

const ErrorSummary = ({
  title,
  description,
  children,
  style,
  className,
  ariaLabelledBy,
  role,
  dataModule
}) => (
  <div
    className={`nhsuk-error-summary ${className}`}
    style={style}
    aria-labelledby={ariaLabelledBy}
    role={role}
    tabIndex="-1"
    data-module={dataModule}
  >
    <h2 className="nhsuk-error-summary__title">{title}</h2>
    <div className="nhsuk-error-summary__body">
      {description ? <p>{description}</p> : null}
      <ul className="nhsuk-list nhsuk-error-summary__list">{children}</ul>
    </div>
  </div>
);

ErrorItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType,
  onClick: PropTypes.func
};

ErrorItem.defaultProps = {
  href: '#',
  className: '',
  style: {},
  onClick: () => {}
};

ErrorSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType,
  ariaLabelledBy: PropTypes.string,
  role: PropTypes.string,
  dataModule: PropTypes.string
};

ErrorSummary.defaultProps = {
  description: '',
  className: '',
  style: {},
  ariaLabelledBy: 'error-summary-title',
  role: 'alert',
  dataModule: 'error-summary'
};

ErrorSummary.ErrorItem = ErrorItem;

export default ErrorSummary;
