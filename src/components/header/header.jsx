import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import HeaderSearch from './components/header-search';
import NHSHeaderLogo from './components/header-logo';

const Link = ({ href, children, onClick, mobileOnly, className, style }) => (
  <li
    style={style}
    className={`nhsuk-header__navigation-item ${
      mobileOnly ? 'nhsuk-header__navigation-item--for-mobile' : ''
    } ${className}`}
  >
    <a className="nhsuk-header__navigation-link" onClick={onClick} href={href}>
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
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  mobileOnly: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType
};

Link.defaultProps = {
  href: '#',
  onClick: () => {},
  mobileOnly: false,
  className: '',
  style: {}
};

const HomeLink = ({ href, children, onClick }) => (
  <li className="nhsuk-header__navigation-item">
    <a className="nhsuk-header__navigation-link" onClick={onClick} href={href}>
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

HomeLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

HomeLink.defaultProps = {
  href: '#',
  onClick: () => {}
};

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

Link.defaultProps = {
  href: '#',
  onClick: () => {}
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      searchToggle: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  toggleSearch(e) {
    e.preventDefault();
    const { searchToggle } = this.state;
    this.setState({ searchToggle: !searchToggle });
  }

  handleSearch(searchString) {
    const { onSearch } = this.props;
    onSearch(searchString);
  }

  render() {
    const { expanded, searchToggle } = this.state;
    const {
      searchAriaLabel,
      withNavigation,
      withSearch,
      transactional,
      serviceName,
      serviceNameUrl,
      longServiceName,
      children
    } = this.props;
    return (
      <header
        className={`nhsuk-header ${
          transactional ? 'nhsuk-header--transactional' : null
        }`}
        role="banner"
      >
        <div className="nhsuk-width-container nhsuk-header__container">
          <NHSHeaderLogo transactional={transactional} />
          {transactional && serviceName ? (
            <div
              className={`nhsuk-header__transactional-service-name ${
                longServiceName
                  ? 'nhsuk-header__transactional-service-name--long'
                  : ''
              }`}
            >
              <a
                className="nhsuk-header__transactional-service-name--link"
                href={serviceNameUrl || '#'}
              >
                {serviceName}
              </a>
            </div>
          ) : null}
          <div
            className={`nhsuk-header__content ${searchToggle ? 'js-show' : ''}`}
            id="content-header"
          >
            {withNavigation ? (
              <div className="nhsuk-header__menu">
                <button
                  className={`nhsuk-header__menu-toggle ${
                    expanded ? 'is-active' : ''
                  }`}
                  id="toggle-menu"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls="header-navigation"
                  aria-label="Open menu"
                  onClick={this.toggleMenu}
                >
                  Menu
                </button>
              </div>
            ) : null}
            {withSearch ? (
              <HeaderSearch
                hiddenLabel={searchAriaLabel}
                onSubmit={this.handleSearch}
              />
            ) : null}
          </div>
        </div>
        {withNavigation ? (
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
                onClick={this.toggleMenu}
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
        ) : null}
      </header>
    );
  }
}
Header.Link = Link;

export default Header;
