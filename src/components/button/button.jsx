import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const { children, secondary, reverse, href, className, ...rest } = props;
  if (href) {
    /* If a href prop is supplied, render the button as a styled link */
    return (
      <a
        className={classNames(
          'nhsuk-button',
          {
            'nhsuk-button--secondary': secondary
          },
          { 'nhsuk-button--reverse': reverse },
          className
        )}
        href={href}
        {...rest}
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
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  reverse: PropTypes.bool,
  href: PropTypes.oneOf([PropTypes.string, PropTypes.href]),
  className: PropTypes.string
};

Button.defaultProps = {
  secondary: false,
  reverse: false,
  href: false,
  className: ''
};

export default Button;
