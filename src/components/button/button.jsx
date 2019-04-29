import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

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
    disabled,
    className,
    style,
    onClick
  } = props;
  if (href) {
    /* If a href prop is supplied, render the button as a styled link */
    return (
      <a
        style={style}
        role={role}
        href={href}
        onClick={onClick}
        className={classNames(
          'nhsuk-button',
          {
            'nhsuk-button--secondary': secondary
          },
          { 'nhsuk-button--reverse': reverse },
          className
        )}
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
      className={classNames(
        'nhsuk-button',
        {
          'nhsuk-button--secondary': secondary
        },
        { 'nhsuk-button--reverse': reverse },
        className
      )}
      style={style}
      name={name}
      onClick={onClick}
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
  href: PropTypes.oneOf([PropTypes.string, PropTypes.href]),
  role: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType,
  onClick: PropTypes.func
};

Button.defaultProps = {
  secondary: false,
  reverse: false,
  disabled: false,
  href: false,
  role: 'button',
  type: 'button',
  name: '',
  value: '',
  className: '',
  style: {},
  onClick: () => {}
};

export default Button;
