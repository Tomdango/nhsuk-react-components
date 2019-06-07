import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Details = ({ children, title, expander, className, ...rest }) => (
  <details
    className={classNames(
      'nhsuk-details',
      { 'nhsuk-expander': expander },
      className
    )}
    {...rest}
  >
    <summary className="nhsuk-details__summary">
      <span className="nhsuk-details__summary-text">{title}</span>
    </summary>
    <div className="nhsuk-details__text">{children}</div>
  </details>
);

const ExpanderGroup = ({ children, className, ...rest }) => (
  <div className={classNames('nhsuk-expander-group', className)} {...rest}>
    {children}
  </div>
);

ExpanderGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ExpanderGroup.defaultProps = {
  className: ''
};

Details.propTypes = {
  expander: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Details.defaultProps = {
  expander: false,
  className: ''
};

Details.ExpanderGroup = ExpanderGroup;

export default Details;
