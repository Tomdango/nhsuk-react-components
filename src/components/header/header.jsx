import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderContext from './HeaderContext';
import Link from './components/link';
import Title from './components/title';
import Logo from './components/logo';
import MenuToggle from './components/menutoggle';
import Content from './components/content';
import Search from './components/search';
import Container from './components/container';
import Navigation from './components/navigation';

class Header extends Component {
  static Logo = Logo;

  static MenuToggle = MenuToggle;

  static Content = Content;

  static Search = Search;

  static Container = Container;

  static Navigation = Navigation;

  static Link = Link;

  static Title = Title;

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    transactional: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    transactional: ''
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      menuVisible: false
    };
  }

  toggleMenu = () => {
    const { menuVisible } = this.state;
    this.setState({ menuVisible: !menuVisible });
  };

  render() {
    const { className, children, transactional, ...rest } = this.props;
    const { menuVisible } = this.state;
    const contextValue = {
      transactional,
      menuVisible,
      toggleMenu: this.toggleMenu
    };
    return (
      <header
        className={classNames(
          'nhsuk-header',
          { 'nhsuk-header--transactional': transactional },
          className
        )}
        {...rest}
      >
        <HeaderContext.Provider value={contextValue}>
          {children}
        </HeaderContext.Provider>
      </header>
    );
  }
}

export default Header;
