import React from 'react';
import PropTypes from 'prop-types';

const actionPropType = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  visuallyHiddenText: PropTypes.string
};

const Row = ({ rowKey, action, children, className, ...rest }) => (
  <div className={`nhsuk-summary-list__row ${className}`} {...rest}>
    <dt className="nhsuk-summary-list__key">{rowKey}</dt>
    <dd className="nhsuk-summary-list__value">{children}</dd>
    {action ? (
      <dd className="nhsuk-summary-list__actions">
        <a href={action.href} onClick={action.onClick}>
          {action.text}
          <span className="nhsuk-u-visually-hidden">
            {action.visuallyHiddenText}
          </span>
        </a>
      </dd>
    ) : null}
  </div>
);

Row.propTypes = {
  rowKey: PropTypes.string,
  action: PropTypes.oneOfType([actionPropType, PropTypes.bool]),
  children: PropTypes.node,
  className: PropTypes.string
};

Row.defaultProps = {
  rowKey: '',
  action: false,
  children: '',
  className: ''
};

export default Row;
