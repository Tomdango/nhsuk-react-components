import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Container = ({ fluid, children, className, style }) => (
  <div
    className={`nhsuk-width-container${fluid ? '-fluid' : ''} ${className}`}
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
