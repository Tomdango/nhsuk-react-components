import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ErrorItem = ({ href, children, className, id, onClick, ...rest }) => (
  <li id={id} {...rest}>
    <a href={href} id={`${id ? `${id}__link` : null}`} onClick={onClick}>
      {children}
    </a>
  </li>
);

ErrorItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
};

ErrorItem.defaultProps = {
  href: '#',
  className: '',
  id: '',
  onClick: () => {}
};

const ErrorSummary = ({ title, description, children, className, ...rest }) => (
  <div className={classNames('nhsuk-error-summary', className)} {...rest}>
    <h2 className="nhsuk-error-summary__title">{title}</h2>
    <div className="nhsuk-error-summary__body">
      {description ? <p>{description}</p> : null}
      <ul className="nhsuk-list nhsuk-error-summary__list">{children}</ul>
    </div>
  </div>
);

ErrorSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.string
};

ErrorSummary.defaultProps = {
  description: '',
  className: '',
  role: 'alert',
  tabIndex: '-1'
};

ErrorSummary.Item = ErrorItem;

export default ErrorSummary;
