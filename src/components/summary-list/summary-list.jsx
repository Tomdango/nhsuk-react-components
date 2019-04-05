import React from 'react';
// import './_summary-list.scss';
import Row from './components/row.jsx';

const SummaryList = ({ children }) => (
  <dl className="nhsuk-summary-list">{children}</dl>
);
SummaryList.Row = Row;

export default SummaryList;
