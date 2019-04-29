import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Details = ({ children, title, expander, className, style }) => (
  <details
    style={style}
    className={classNames(
      'nhsuk-details',
      { 'nhsuk-expander': expander },
      className
    )}
  >
    <summary className="nhsuk-details__summary">
      <span className="nhsuk-details__summary-text">{title}</span>
    </summary>
    <div className="nhsuk-details__text">{children}</div>
  </details>
);

const ExpanderGroup = ({ children }) => (
  <div className="nhsuk-expander-group">{children}</div>
);

ExpanderGroup.propTypes = {
  children: PropTypes.node.isRequired
};

Details.propTypes = {
  expander: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Details.defaultProps = {
  expander: false,
  className: '',
  style: {}
};

Details.ExpanderGroup = ExpanderGroup;

export default Details;
