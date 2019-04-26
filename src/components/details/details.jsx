import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Details = ({ children, text, expander, className, style }) => (
  <details
    style={style}
    className={classNames(
      'nhsuk-details',
      { 'nhsuk-expander': expander },
      className
    )}
  >
    <summary className="nhsuk-details__summary">
      <span className="nhsuk-details__summary-text">{text}</span>
    </summary>
    <div className="nhsuk-details__text">{children}</div>
  </details>
);

Details.propTypes = {
  expander: PropTypes.bool,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Details.defaultProps = {
  expander: false,
  className: '',
  style: {}
};

export default Details;
