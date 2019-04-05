import React from 'react';

const TableRow = ({ items }) => {
  const cells = items.map(item => (
    <td className="nhsuk-table__cell">{item}</td>
  ));
  return <tr className="nhsuk-table__row">{cells}</tr>;
};

export default TableRow;
