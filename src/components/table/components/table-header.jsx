import React from 'react';

const TableHeader = ({ rows }) => {
  const tableRows = rows.map(row => (
    <th className="nhsuk-table__header" scope="col">
      {row}
    </th>
  ));
  return (
    <thead className="nhsuk-table__head">
      <tr className="nhsuk-table__row">{tableRows}</tr>
    </thead>
  );
};

export default TableHeader;
