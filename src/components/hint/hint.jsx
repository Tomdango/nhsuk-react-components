import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Hint = ({ children, className, style }) => (
  <span className={classNames('nhsuk-hint', className)} style={style}>
    {children}
  </span>
);

Hint.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Hint.defaultProps = {
  className: '',
  style: {}
};

export default Hint;
