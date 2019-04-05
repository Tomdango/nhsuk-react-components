import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children }) => {
  return <div className="nhsuk-grid-row">{children}</div>;
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
