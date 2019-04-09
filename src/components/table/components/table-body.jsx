import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const TableBody = ({ children, className, style }) => (
  <tbody className={`nhsuk-table__body ${className}`} style={style}>
    {children}
  </tbody>
);

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

TableBody.defaultProps = {
  className: '',
  style: {}
};

export default TableBody;
