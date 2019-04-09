import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import Row from './components/row';

const SummaryList = ({ children, className, style }) => (
  <dl className={`nhsuk-summary-list ${className}`} style={style}>
    {children}
  </dl>
);

SummaryList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

SummaryList.defaultProps = {
  className: '',
  style: {}
};

SummaryList.Row = Row;

export default SummaryList;
