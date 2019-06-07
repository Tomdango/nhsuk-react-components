import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = ({ href, current, children, onClick, className, id, ...rest }) => (
  <li
    className={classNames('nhsuk-contents-list__item', className)}
    id={id}
    {...rest}
  >
    {current ? (
      <span className="nhsuk-contents-list__current">{children}</span>
    ) : (
      <a
        className="nhsuk-contents-list__link"
        id={`${id ? `${id}__link` : null}`}
        onClick={onClick}
        href={href}
      >
        {children}
      </a>
    )}
  </li>
);

Item.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  current: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string
};

Item.defaultProps = {
  href: '#',
  current: false,
  onClick: () => {},
  className: '',
  id: ''
};

const ContentsList = ({ children, visuallyHiddenText, className, ...rest }) => (
  <nav className={classNames('nhsuk-contents-list', className)} {...rest}>
    <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
    <ol className="nhsuk-contents-list__list">{children}</ol>
  </nav>
);

ContentsList.propTypes = {
  children: PropTypes.node.isRequired,
  visuallyHiddenText: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string
};

ContentsList.defaultProps = {
  visuallyHiddenText: 'Contents',
  role: 'navigation',
  className: ''
};

ContentsList.Item = Item;

export default ContentsList;
