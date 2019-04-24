import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children }) => <div className="nhsuk-grid-row">{children}</div>;

const Column = ({ children, width, tabletWidth, forceLayout }) => (
  <div
    className={`nhsuk-grid-column-${width} ${
      forceLayout ? `nhsuk-u-${width}` : ''
    } ${tabletWidth ? `nhsuk-u-${tabletWidth}-tablet` : ''}`}
  >
    {children}
  </div>
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
  children: PropTypes.node,
  forceLayout: PropTypes.bool,
  tabletWidth: PropTypes.oneOf([
    '',
    'full',
    'three-quarters',
    'one-half',
    'two-thirds',
    'one-third',
    'one-quarter'
  ])
};

Column.defaultProps = {
  children: null,
  forceLayout: false,
  tabletWidth: ''
};

Row.Column = Column;

export default Row;
