import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const TableRow = ({ items, className, style }) => {
  const cells = items.map(item => (
    <td className="nhsuk-table__cell" key={item}>
      {item}
    </td>
  ));
  return (
    <tr className={classNames('nhsuk-table__row', className)} style={style}>
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
