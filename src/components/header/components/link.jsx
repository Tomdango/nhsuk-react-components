import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';

const Link = ({ children, style, mobileOnly, className, ...rest }) => (
  <li
    className={classNames(
      'nhsuk-header__navigation-item',
      { 'nhsuk-header__navigation-item--for-mobile': mobileOnly },
      className
    )}
    style={style}
  >
    <a className="nhsuk-header__navigation-link" {...rest}>
      {children}
      <svg
        className="nhsuk-icon nhsuk-icon__chevron-right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
      </svg>
    </a>
  </li>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  mobileOnly: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType
};

Link.defaultProps = {
  mobileOnly: false,
  className: '',
  style: {}
};

export default Link;
