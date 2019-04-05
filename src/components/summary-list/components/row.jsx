import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ rowKey, action, children, visuallyHiddenText }) => {
  return (
    <div className="nhsuk-summary-list__row">
      <dt class="nhsuk-summary-list__key">{rowKey}</dt>
      <dd class="nhsuk-summary-list__value">{children}</dd>
      {action ? (
        <dd class="nhsuk-summary-list__actions">
          <a href={action.href}>
            {action.text}
            <span class="nhsuk-u-visually-hidden">
              {' '}
              {action.visuallyHiddenText}
            </span>
          </a>
        </dd>
      ) : null}
    </div>
  );
};

const Column = ({ children, width }) => (
  <div className={`nhsuk-grid-column-${width}`}>{children}</div>
);

Row.propTypes = {
  children: PropTypes.node
};

Row.defaultProps = {
  children: null
};

Column.propTypes = {
  width: PropTypes.oneOf([
    'full',
    'three-quarters',
    'one-half',
    'two-thirds',
    'one-third',
    'one-quarter'
  ]).isRequired,
  children: PropTypes.node
};

Column.defaultProps = {
  children: null
};

Row.Column = Column;

export default Row;
