import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import HeaderContext from '../HeaderContext';

const Navigation = ({ title, children, className, ...rest }) => {
  const { menuVisible, toggleMenu } = useContext(HeaderContext);
  return (
    <nav
      className={classNames(
        'nhsuk-header__navigation',
        { 'js-show': menuVisible },
        className
      )}
      {...rest}
    >
      <p className="nhsuk-header__navigation-title">
        <span id="label-navigation">{title}</span>
        <button
          className="nhsuk-header__navigation-close"
          type="button"
          id="close-menu"
          onClick={toggleMenu}
        >
          <svg
            className="nhsuk-icon nhsuk-icon__close"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
          </svg>
          <span className="nhsuk-u-visually-hidden">Close menu</span>
        </button>
      </p>
      <ul className="nhsuk-header__navigation-list">{children}</ul>
    </nav>
  );
};
Navigation.propTypes = {
  role: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Navigation.defaultProps = {
  role: 'navigation',
  className: ''
};

export default Navigation;
