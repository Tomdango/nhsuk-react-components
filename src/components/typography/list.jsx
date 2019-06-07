import React from 'react';
import { oneOf, node, string } from 'prop-types';
import classNames from 'classnames';

const List = ({ type, children, className, ...rest }) => {
  if (type === 'number') {
    return (
      <ol
        className={classNames('nhsuk-list nhsuk-list--number', className)}
        {...rest}
      >
        {children}
      </ol>
    );
  }
  return (
    <ul
      className={classNames('nhsuk-list nhsuk-list--bullet', className)}
      {...rest}
    >
      {children}
    </ul>
  );
};

List.propTypes = {
  type: oneOf(['bullet', 'number']),
  children: node.isRequired,
  className: string
};

List.defaultProps = {
  type: 'bullet',
  className: ''
};

export default List;
