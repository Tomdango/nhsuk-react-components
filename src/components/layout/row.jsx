import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Row = ({ children, className, style }) => (
  <div className={classNames('nhsuk-grid-row', className)} style={style}>
    {children}
  </div>
);
const Column = ({
  children,
  width,
  tabletWidth,
  forceLayout,
  className,
  style
}) => (
  <div
    className={classNames(
      `nhsuk-grid-column-${width}`,
      { [`nhsuk-u-${width}`]: forceLayout },
      { [`nhsuk-u-${tabletWidth}-tablet`]: tabletWidth },
      className
    )}
    style={style}
  >
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

Row.defaultProps = {
  children: null,
  className: '',
  style: {}
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
  className: PropTypes.string,
  style: stylePropType
};

Column.defaultProps = {
  children: null,
  forceLayout: false,
  tabletWidth: '',
  className: '',
  style: {}
};

Row.Column = Column;

export default Row;
