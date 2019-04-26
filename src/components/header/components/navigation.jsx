import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ expanded, toggleMenu, children }) => (
  <nav
    className={`nhsuk-header__navigation ${expanded ? 'js-show' : ''}`}
    id="header-navigation"
    role="navigation"
    aria-label="Primary navigation"
    aria-labelledby="label-navigation"
  >
    <p className="nhsuk-header__navigation-title">
      <span id="label-navigation">Menu</span>
      <button
        type="button"
        className="nhsuk-header__navigation-close"
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
          <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
        </svg>
        <span className="nhsuk-u-visually-hidden">Close menu</span>
      </button>
    </p>
    <ul className="nhsuk-header__navigation-list">{children}</ul>
  </nav>
);

Navigation.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  children: PropTypes.node
};

Navigation.defaultProps = {
  children: null
};

export default Navigation;
