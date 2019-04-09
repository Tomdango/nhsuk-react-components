import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const TableRow = ({ items, className, style }) => {
  const cells = items.map(item => (
    <td className="nhsuk-table__cell">{item}</td>
  ));
  return (
    <tr className={`nhsuk-table__row ${className}`} style={style}>
      {cells}
    </tr>
  );
};

TableRow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  className: PropTypes.string,
  style: stylePropType
};

TableRow.defaultProps = {
  className: '',
  style: {}
};

export default TableRow;
