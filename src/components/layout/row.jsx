import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Row = ({ children, className, ...rest }) => (
  <div className={classNames('nhsuk-grid-row', className)} {...rest}>
    {children}
  </div>
);

const Column = ({
  children,
  width,
  tabletWidth,
  forceLayout,
  className,
  ...rest
}) => (
  <div
    className={classNames(
      `nhsuk-grid-column-${width}`,
      { [`nhsuk-u-${width}`]: forceLayout },
      { [`nhsuk-u-${tabletWidth}-tablet`]: tabletWidth },
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Row.defaultProps = {
  children: null,
  className: ''
};

Column.propTypes = {
  width: PropTypes.oneOf([
    'full',
    'three-quarters',
    'one-half',
    'two-thirds',
    'one-third',
    'one-quarter'
  ]).isRequired,
  children: PropTypes.node,
  forceLayout: PropTypes.bool,
  tabletWidth: PropTypes.oneOf([
    '',
    'full',
    'three-quarters',
    'one-half',
    'two-thirds',
    'one-third',
    'one-quarter'
  ]),
  className: PropTypes.string
};

Column.defaultProps = {
  children: null,
  forceLayout: false,
  tabletWidth: '',
  className: ''
};

Row.Column = Column;

export default Row;
