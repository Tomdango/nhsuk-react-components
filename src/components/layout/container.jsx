import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Container = ({ fluid, children, className, style }) => (
  <div
    className={classNames(
      { 'nhsuk-width-container': !fluid },
      { 'nhsuk-width-container-fluid': fluid },
      className
    )}
    style={style}
  >
    {children}
  </div>
);

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Container.defaultProps = {
  fluid: false,
  className: '',
  style: {}
};

export default Container;
