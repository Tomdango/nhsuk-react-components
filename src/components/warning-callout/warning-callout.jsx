import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WarningCallout = ({ heading, children, className, ...rest }) => (
  <div className={classNames('nhsuk-warning-callout', className)} {...rest}>
    {heading ? (
      <h3 className="nhsuk-warning-callout__label">{heading}</h3>
    ) : null}
    {children}
  </div>
);

WarningCallout.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

WarningCallout.defaultProps = {
  heading: '',
  className: ''
};
export default WarningCallout;
