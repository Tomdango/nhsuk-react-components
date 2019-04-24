import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import HeaderSearch from './components/search';
import Logo from './components/logo';
import MobileNavigation from './components/mobile-navigation';
import Navigation from './components/navigation';

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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      searchToggle: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    const { searchToggle } = this.state;
    this.setState({ searchToggle: !searchToggle });
  }

  toggleMenu(e) {
    e.preventDefault();
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
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
      children,
      role,
      toggleMenuButtonText,
      logoHref,
      logoAriaLabel,
      logoXlinkHref,
      logoSrc,
      logoRole,
      logoFill,
      whiteLogo
    } = this.props;
    return (
      <header
        className={`nhsuk-header ${
          transactional ? 'nhsuk-header--transactional' : ''
        }`}
        role={role}
      >
        <div className="nhsuk-width-container nhsuk-header__container">
          <Logo
            href={logoHref}
            ariaLabel={logoAriaLabel}
            xlinkHref={logoXlinkHref}
            src={logoSrc}
            role={logoRole}
            whiteLogo={whiteLogo}
            fill={logoFill}
          />
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
                href={serviceNameUrl}
              >
                {serviceName}
              </a>
            </div>
          ) : null}
          {withNavigation || withSearch ? (
            <div
              className={`nhsuk-header__content ${
                searchToggle ? 'js-show' : ''
              }`}
              id="content-header"
            >
              {withNavigation ? (
                <MobileNavigation
                  expanded={expanded}
                  toggleMenu={this.toggleMenu}
                  toggleMenuButtonText={toggleMenuButtonText}
                />
              ) : null}
              {withSearch ? (
                <HeaderSearch
                  hiddenLabel={searchAriaLabel}
                  onSubmit={this.handleSearch}
                  toggleSearch={this.toggleSearch}
                />
              ) : null}
            </div>
          ) : null}
        </div>
        {withNavigation ? (
          <Navigation expanded={expanded} toggleMenu={this.toggleMenu}>
            {children}
          </Navigation>
        ) : null}
      </header>
    );
  }
}

Header.Link = Link;

Header.propTypes = {
  onSearch: PropTypes.func,
  searchAriaLabel: PropTypes.string,
  withNavigation: PropTypes.bool,
  withSearch: PropTypes.bool,
  transactional: PropTypes.bool,
  serviceName: PropTypes.string,
  serviceNameUrl: PropTypes.string,
  longServiceName: PropTypes.bool,
  children: PropTypes.node,
  role: PropTypes.string,
  toggleMenuButtonText: PropTypes.string,
  logoRole: PropTypes.string,
  logoSrc: PropTypes.string,
  logoHref: PropTypes.string,
  logoAriaLabel: PropTypes.string,
  logoXlinkHref: PropTypes.string,
  logoFill: PropTypes.string,
  whiteLogo: PropTypes.bool
};

Header.defaultProps = {
  onSearch: () => {},
  searchAriaLabel: '',
  withNavigation: false,
  withSearch: false,
  transactional: false,
  serviceName: false,
  longServiceName: false,
  children: null,
  role: 'banner',
  serviceNameUrl: '#',
  toggleMenuButtonText: 'Menu',
  logoRole: 'presentation',
  logoSrc: 'https://assets.nhs.uk/images/nhs-logo.png',
  logoHref: '/',
  logoAriaLabel: 'NHS Logo',
  logoXlinkHref: '',
  logoFill: '#fff',
  whiteLogo: true
};
export default Header;
