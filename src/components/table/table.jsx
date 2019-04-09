import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import TableHeader from './components/table-header';
import TableBody from './components/table-body';
import TableRow from './components/table-row';

const TablePanel = ({ heading, children, className, style }) => (
  <div
    className={`nhsuk-table__panel-with-heading-tab ${className}`}
    style={style}
  >
    {heading ? <h3 className="nhsuk-table__heading-tab">{heading}</h3> : null}
    {children}
  </div>
);

TablePanel.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

TablePanel.defaultProps = {
  heading: '',
  className: '',
  style: {}
};

const Table = ({ caption, children, className, style }) => (
  <div className="nhsuk-table-responsive">
    <table className={`nhsuk-table ${className}`} style={style}>
      {caption ? (
        <caption className="nhsuk-table__caption">{caption}</caption>
      ) : null}
      {children}
    </table>
  </div>
);

Table.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Table.defaultProps = {
  caption: '',
  className: '',
  style: {}
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Panel = TablePanel;

export default Table;
