import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const TableRow = ({ children, className, style }) => {
  const cells = React.Children.map(children, child => {
    const { type } = child;
    if (type === 'td') {
      const { className: childClassName } = child.props;
      return React.cloneElement(child, {
        ...child.props,
        className: classNames('nhsuk-table__cell', childClassName)
      });
    }
    return child;
  });
  return (
    <tr className={classNames('nhsuk-table__row', className)} style={style}>
      {cells}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

TableRow.defaultProps = {
  className: '',
  style: {}
};

export default TableRow;
