import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Divider = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-radio__divider', className)} {...rest} />
);

Divider.propTypes = {
  className: PropTypes.string
};
Divider.defaultProps = {
  className: ''
};

export default Divider;
