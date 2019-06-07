import React from 'react';
import { node, string } from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Item = ({ children, className, style, ...rest }) => (
  <li className={classNames('nhsuk-breadcrumb__item', className)} style={style}>
    <a className="nhsuk-breadcrumb__link" {...rest}>
      {children}
    </a>
  </li>
);

const Breadcrumbs = ({ children, className, ...rest }) => (
  <nav className={classNames('nhsuk-breadcrumb', className)} {...rest}>
    <div className="nhsuk-width-container">
      <ol className="nhsuk-breadcrumb__list">{children}</ol>
    </div>
  </nav>
);

Breadcrumbs.propTypes = {
  children: node.isRequired,
  className: string
};

Breadcrumbs.defaultProps = {
  className: ''
};

Item.propTypes = {
  children: node.isRequired,
  className: string,
  style: stylePropType
};

Item.defaultProps = {
  className: '',
  style: {}
};

Breadcrumbs.Item = Item;

export default Breadcrumbs;
