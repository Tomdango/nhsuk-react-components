import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const actionPropType = {
  href: PropTypes.string,
  text: PropTypes.string,
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
  action: actionPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

Row.defaultProps = {
  rowKey: '',
  action: {
    href: '#',
    text: '',
    onClick: () => {},
    visuallyHiddenText: 'action'
  },
  children: '',
  className: '',
  style: {}
};

const Column = ({ children, width, className, style }) => (
  <div className={`nhsuk-grid-column-${width} ${className}`} style={style}>
    {children}
  </div>
);

Column.propTypes = {
  width: PropTypes.oneOf([
    'full',
    'three-quarters',
    'one-half',
    'two-thirds',
    'one-third',
    'one-quarter'
  ]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

Column.defaultProps = {
  children: null,
  className: '',
  style: {}
};

Row.Column = Column;

export default Row;
