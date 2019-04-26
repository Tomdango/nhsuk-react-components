import React from 'react';
import { node, string, func } from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Item = ({ children, href, onClick, className, style }) => (
  <li className={classNames('nhsuk-breadcrumb__item', className)} style={style}>
    <a className="nhsuk-breadcrumb__link" onClick={onClick} href={href}>
      {children}
    </a>
  </li>
);

const Breadcrumbs = ({ children, className, style, ariaLabel }) => (
  <nav
    className={classNames('nhsuk-breadcrumb', className)}
    style={style}
    aria-label={ariaLabel}
  >
    <div className="nhsuk-width-container">
      <ol className="nhsuk-breadcrumb__list">{children}</ol>
    </div>
  </nav>
);

Breadcrumbs.propTypes = {
  children: node.isRequired,
  ariaLabel: string,
  style: stylePropType,
  className: string
};

Breadcrumbs.defaultProps = {
  ariaLabel: 'Breadcrumbs',
  style: {},
  className: ''
};

Item.propTypes = {
  href: string,
  children: node.isRequired,
  onClick: func,
  className: string,
  style: stylePropType
};

Item.defaultProps = {
  href: '#',
  className: '',
  style: {},
  onClick: () => {}
};

Breadcrumbs.Item = Item;

export default Breadcrumbs;
