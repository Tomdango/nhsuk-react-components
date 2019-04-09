import React from 'react';
import { oneOf, node, string } from 'prop-types';
import stylePropType from 'react-style-proptype';

const List = ({ type, children, className, style }) => {
  if (type === 'number') {
    return (
      <ol
        className={`nhsuk-list nhsuk-list--number ${className}`}
        style={style}
      >
        {children}
      </ol>
    );
  }
  return (
    <ul className={`nhsuk-list nhsuk-list--bullet ${className}`} style={style}>
      {children}
    </ul>
  );
};

List.propTypes = {
  type: oneOf(['bullet', 'number']),
  children: node.isRequired,
  className: string,
  style: stylePropType
};

List.defaultProps = {
  type: 'bullet',
  className: '',
  style: {}
};
