import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import HeaderContext from '../HeaderContext';

const MenuToggle = ({ className, ...rest }) => {
  const { toggleMenu } = useContext(HeaderContext);
  return (
    <div className={classNames('nhsuk-header__menu', className)} {...rest}>
      <button
        className="nhsuk-header__menu-toggle"
        id="toggle-menu"
        type="button"
        aria-controls="header-navigation"
        aria-label="Open menu"
        onClick={toggleMenu}
      >
        Menu
      </button>
    </div>
  );
};

MenuToggle.propTypes = {
  className: PropTypes.string
};

MenuToggle.defaultProps = {
  className: ''
};

export default MenuToggle;
