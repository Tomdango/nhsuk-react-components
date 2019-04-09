import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const TableHeader = ({ rows, className, style }) => {
  const tableRows = rows.map(row => (
    <th className="nhsuk-table__header" scope="col">
      {row}
    </th>
  ));
  return (
    <thead className={`nhsuk-table__head ${className}`} style={style}>
      <tr className="nhsuk-table__row">{tableRows}</tr>
    </thead>
  );
};

TableHeader.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  className: PropTypes.string,
  style: stylePropType
};

TableHeader.defaultProps = {
  className: '',
  style: {}
};

export default TableHeader;
