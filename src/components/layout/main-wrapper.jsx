import React from 'react';
import { node, string } from 'prop-types';

const MainWrapper = ({ children, id }) => (
  <main className="nhsuk-main-wrapper" id={id}>
    {children}
  </main>
);

MainWrapper.propTypes = {
  children: node.isRequired,
  id: string
};

MainWrapper.defaultProps = {
  id: ''
};

export default MainWrapper;
