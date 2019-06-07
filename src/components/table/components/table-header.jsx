import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const TableHeader = ({ children, className, ...rest }) => {
  const tableRows = React.Children.map(children, child => {
    const { type } = child;
    if (type === 'th') {
      const { className: childClassName } = child.props;
      return React.cloneElement(child, {
        ...child.props,
        className: classNames('nhsuk-table__header', childClassName),
        scope: 'col'
      });
    }
    return child;
  });

  return (
    <thead className={classNames('nhsuk-table__head', className)} {...rest}>
      <tr className="nhsuk-table__row">{tableRows}</tr>
    </thead>
  );
};

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

TableHeader.defaultProps = {
  className: '',
  style: {}
};

export default TableHeader;
