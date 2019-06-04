import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ children, ...rest }) => {
  return <option {...rest}>{children}</option>;
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  value: PropTypes.string.isRequired
};

Item.defaultProps = {
  selected: false
};

export default Item;
