import React from 'react';
import PropTypes from 'prop-types';

const MobileNavigation = ({ expanded, toggleMenu, toggleMenuButtonText }) => (
  <div className="nhsuk-header__menu">
    <button
      className={`nhsuk-header__menu-toggle ${expanded ? 'is-active' : ''}`}
      id="toggle-menu"
      type="button"
      aria-expanded={expanded}
      aria-controls="header-navigation"
      aria-label="Open menu"
      onClick={toggleMenu}
    >
      {toggleMenuButtonText}
    </button>
  </div>
);

MobileNavigation.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggleMenuButtonText: PropTypes.string.isRequired
};

export default MobileNavigation;
