import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ fluid, children }) => (
  <div className={`nhsuk-width-container${fluid ? '-fluid' : ''}`}>
    {children}
  </div>
);

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  fluid: false
};

export default Container;
