import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const WarningCallout = ({ heading, children, className, style }) => (
  <div className={classNames('nhsuk-warning-callout', className)} style={style}>
    {heading ? (
      <h3 className="nhsuk-warning-callout__label">{heading}</h3>
    ) : null}
    {children}
  </div>
);

WarningCallout.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

WarningCallout.defaultProps = {
  heading: '',
  className: '',
  style: {}
};
export default WarningCallout;
