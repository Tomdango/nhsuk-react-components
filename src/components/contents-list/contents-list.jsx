import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Item = ({
  href,
  current,
  children,
  onClick,
  ariaCurrent,
  className,
  style
}) => (
  <li
    className={classNames('nhsuk-contents-list__item', className)}
    aria-current={ariaCurrent}
    style={style}
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
  ariaLabel,
  style
}) => (
  <nav
    className={classNames('nhsuk-contents-list', className)}
    role={role}
    style={style}
    aria-label={ariaLabel}
  >
    <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
    <ol className="nhsuk-contents-list__list">{children}</ol>
  </nav>
);

ContentsList.propTypes = {
  children: PropTypes.node.isRequired,
  visuallyHiddenText: PropTypes.string,
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

ContentsList.defaultProps = {
  visuallyHiddenText: 'Contents',
  role: 'navigation',
  ariaLabel: 'Pages in this guide',
  className: '',
  style: {}
};

Item.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  current: PropTypes.bool,
  onClick: PropTypes.func,
  ariaCurrent: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

Item.defaultProps = {
  href: '#',
  current: false,
  onClick: () => {},
  ariaCurrent: 'page',
  className: '',
  style: {}
};

ContentsList.Item = Item;

export default ContentsList;
