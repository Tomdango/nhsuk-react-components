import React from 'react';
import PropTypes from 'prop-types';
// import './_breadcrumbs.scss';

const Item = ({ children, href }) => (
  <li className="nhsuk-breadcrumb__item">
    <a className="nhsuk-breadcrumb__link" href={href}>
      {children}
    </a>
  </li>
);

const Breadcrumbs = ({ children }) => (
  <nav className="nhsuk-breadcrumb" aria-label="Breadcrumb">
    <div className="nhsuk-width-container">
      <ol className="nhsuk-breadcrumb__list">{children}</ol>
    </div>
  </nav>
);

Breadcrumbs.Item = Item;

Breadcrumbs.propTypes = {
  children: PropTypes.instanceOf(Item).isRequired
};

Item.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

Item.defaultProps = {
  href: '#'
};

export default Breadcrumbs;
