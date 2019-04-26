import React from 'react';
import { node, string } from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const ReadingWidth = ({ children, className, style }) => (
  <div className={classNames('nhsuk-u-reading-width', className)} style={style}>
    {children}
  </div>
);

ReadingWidth.propTypes = {
  children: node.isRequired,
  className: string,
  style: stylePropType
};

ReadingWidth.defaultProps = {
  className: '',
  style: {}
};

export default ReadingWidth;
