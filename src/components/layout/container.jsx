import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = ({ fluid, children, className, ...rest }) => (
  <div
    className={classNames(
      { 'nhsuk-width-container': !fluid },
      { 'nhsuk-width-container-fluid': fluid },
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Container.defaultProps = {
  fluid: false,
  className: ''
};

export default Container;
