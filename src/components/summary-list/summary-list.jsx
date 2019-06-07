import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Row from './components/row';

const SummaryList = ({ children, className, ...rest }) => (
  <dl className={classNames('nhsuk-summary-list', className)} {...rest}>
    {children}
  </dl>
);

SummaryList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

SummaryList.defaultProps = {
  className: ''
};

SummaryList.Row = Row;

export default SummaryList;
