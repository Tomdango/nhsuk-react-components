import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ children, ...rest }) => {
  return <option {...rest}>{children}</option>;
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  value: PropTypes.string.isRequired
};

Option.defaultProps = {
  selected: false
};

export default Option;
