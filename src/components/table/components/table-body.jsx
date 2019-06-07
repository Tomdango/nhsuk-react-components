import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const TableBody = ({ children, className, ...rest }) => (
  <tbody className={classNames('nhsuk-table__body', className)} {...rest}>
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
