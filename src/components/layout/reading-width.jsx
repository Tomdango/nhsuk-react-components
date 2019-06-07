import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const ReadingWidth = ({ children, className, ...rest }) => (
  <div className={classNames('nhsuk-u-reading-width', className)} {...rest}>
    {children}
  </div>
);

ReadingWidth.propTypes = {
  children: node.isRequired,
  className: string
};

ReadingWidth.defaultProps = {
  className: ''
};

export default ReadingWidth;
