import React from 'react';
import { node, string } from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const MainWrapper = ({ children, id, className, style }) => (
  <main
    className={classNames('nhsuk-main-wrapper', className)}
    style={style}
    id={id}
  >
    {children}
  </main>
);

MainWrapper.propTypes = {
  children: node.isRequired,
  id: string,
  style: stylePropType,
  className: string
};

MainWrapper.defaultProps = {
  id: '',
  style: {},
  className: ''
};

export default MainWrapper;
