import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Container = ({ className, children, ...rest }) => (
  <div
    className={classNames(
      'nhsuk-width-container nhsuk-header__container',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  className: ''
};

export default Container;
