import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableHeader from './components/table-header';
import TableBody from './components/table-body';
import TableRow from './components/table-row';

const TablePanel = ({ heading, children, className, ...rest }) => (
  <div
    className={classNames('nhsuk-table__panel-with-heading-tab', className)}
    {...rest}
  >
    {heading ? <h3 className="nhsuk-table__heading-tab">{heading}</h3> : null}
    {children}
  </div>
);

TablePanel.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

TablePanel.defaultProps = {
  heading: '',
  className: ''
};

const Table = ({ caption, children, className, ...rest }) => (
  <div className="nhsuk-table-responsive">
    <table className={classNames('nhsuk-table', className)} {...rest}>
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
  className: PropTypes.string
};

Table.defaultProps = {
  caption: '',
  className: ''
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Panel = TablePanel;

export default Table;
