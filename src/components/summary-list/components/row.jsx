import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const actionPropType = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  visuallyHiddenText: PropTypes.string
};

const Row = ({ rowKey, action, children, className, style }) => {
  return (
    <div className={`nhsuk-summary-list__row ${className}`} style={style}>
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
};

Row.propTypes = {
  rowKey: PropTypes.string,
  action: PropTypes.oneOfType([actionPropType, PropTypes.bool]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

Row.defaultProps = {
  rowKey: '',
  action: false,
  children: '',
  className: '',
  style: {}
};

export default Row;
