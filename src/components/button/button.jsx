import React from 'react';
import PropTypes from 'prop-types';
// import './_button.scss';

const Button = props => {
  const {
    children,
    secondary,
    reverse,
    href,
    role,
    type,
    name,
    value,
    disabled
  } = props;
  if (href) {
    /* If a href prop is supplied, render the button as a styled link */
    return (
      <a
        role={role}
        href={href}
        className={`nhsuk-button ${
          secondary ? 'nhsuk-button--secondary' : ''
        } ${reverse ? 'nhsuk-button--reverse' : ''}`}
        disabled={disabled}
      >
        {children}
      </a>
    );
  }
  return (
    // https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <button
      {...props}
      className={`nhsuk-button ${secondary ? 'nhsuk-button--secondary' : ''} ${
        reverse ? 'nhsuk-button--reverse' : ''
      }`}
      name={name}
      value={value}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  reverse: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  name: PropTypes.string,
  value: PropTypes.string
};

Button.defaultProps = {
  secondary: false,
  reverse: false,
  disabled: false,
  href: '',
  role: 'button',
  type: 'button',
  name: '',
  value: ''
};

export default Button;
