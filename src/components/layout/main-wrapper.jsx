import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const MainWrapper = ({ children, className, ...rest }) => (
  <main className={classNames('nhsuk-main-wrapper', className)} {...rest}>
    {children}
  </main>
);

MainWrapper.propTypes = {
  children: node.isRequired,
  id: string,
  className: string
};

MainWrapper.defaultProps = {
  id: '',
  className: ''
};

export default MainWrapper;
