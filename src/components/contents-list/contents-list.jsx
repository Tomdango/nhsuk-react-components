import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ href, current, children, onClick, ariaCurrent, className }) => (
  <li
    className={`nhsuk-contents-list__item ${className}`}
    aria-current={ariaCurrent}
  >
    {current ? (
      <span className="nhsuk-contents-list__current">{children}</span>
    ) : (
      <a className="nhsuk-contents-list__link" onClick={onClick} href={href}>
        {children}
      </a>
    )}
  </li>
);

const ContentsList = ({
  children,
  visuallyHiddenText,
  role,
  className,
  ariaLabel
}) => {
  return (
    <nav
      className={`nhsuk-contents-list ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
      <ol className="nhsuk-contents-list__list">{children}</ol>
    </nav>
  );
};

ContentsList.propTypes = {
  children: PropTypes.node.isRequired,
  visuallyHiddenText: PropTypes.string,
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string
};

ContentsList.defaultProps = {
  visuallyHiddenText: 'Contents',
  role: 'navigation',
  ariaLabel: 'Pages in this guide',
  className: ''
};

Item.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  current: PropTypes.bool,
  onClick: PropTypes.func,
  ariaCurrent: PropTypes.string,
  className: PropTypes.string
};

Item.defaultProps = {
  href: '#',
  current: false,
  onClick: () => {},
  ariaCurrent: 'page',
  className: ''
};

ContentsList.Item = Item;

export default ContentsList;
