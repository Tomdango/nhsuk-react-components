import React from 'react';
import PropTypes from 'prop-types';
// import './_contents-list.scss';

const Item = ({ href, current, children }) => (
  <li className="nhsuk-contents-list__item" aria-current="page">
    {current ? (
      <span className="nhsuk-contents-list__current">{children}</span>
    ) : (
      <a className="nhsuk-contents-list__link" href={href}>
        {children}
      </a>
    )}
  </li>
);

const ContentsList = ({ children }) => {
  return (
    <nav
      className="nhsuk-contents-list"
      role="navigation"
      aria-label="Pages in this guide"
    >
      <h2 className="nhsuk-u-visually-hidden">Contents</h2>
      <ol className="nhsuk-contents-list__list">{children}</ol>
    </nav>
  );
};

ContentsList.Item = Item;

ContentsList.propTypes = {
  children: PropTypes.node.isRequired
};

Item.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  current: PropTypes.bool
};

Item.defaultProps = {
  href: '#',
  current: false
};

export default ContentsList;
