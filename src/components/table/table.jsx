import React from 'react';
// import './_table.scss';
import TableHeader from './components/table-header.jsx';
import TableBody from './components/table-body.jsx';
import TableRow from './components/table-row.jsx';

const TablePanel = ({ heading, children }) => (
  <div className="nhsuk-table__panel-with-heading-tab">
    {heading ? <h3 className="nhsuk-table__heading-tab">{heading}</h3> : null}
    {children}
  </div>
);

const Table = ({ caption, children }) => (
  <div className="nhsuk-table-responsive">
    <table className="nhsuk-table">
      {caption ? (
        <caption className="nhsuk-table__caption">{caption}</caption>
      ) : null}
      {children}
    </table>
  </div>;
);

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Panel = TablePanel;

export default Table;
