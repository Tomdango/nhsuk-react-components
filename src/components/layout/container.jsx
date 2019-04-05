import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ fluid, wrapperId, children }) => (
  <div className={`nhsuk-width-container${fluid ? '-fluid' : ''}`}>
    <main className="nhsuk-main-wrapper" id={wrapperId}>
      {children}
    </main>
  </div>
);

Container.propTypes = {
  fluid: PropTypes.bool,
  wrapperId: PropTypes.string,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  fluid: false,
  wrapperId: ''
};

export default Container;
