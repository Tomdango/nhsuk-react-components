import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Content = ({ className, children, ...rest }) => (
  <div className={classNames('nhsuk-header__content', className)} {...rest}>
    {children}
  </div>
);

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Content.defaultProps = {
  className: ''
};

export default Content;
