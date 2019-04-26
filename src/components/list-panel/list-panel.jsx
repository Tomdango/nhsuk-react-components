import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Item = ({ children, className, style, href }) => (
  <li className={classNames('nhsuk-list-panel__item', className)} style={style}>
    <a className="nhsuk-list-panel__link" href={href}>
      {children}
    </a>
  </li>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType,
  href: PropTypes.string
};

Item.defaultProps = {
  className: '',
  style: {},
  href: '#'
};

const Panel = ({
  label,
  id,
  backToTop,
  backToTopHref,
  backToTopText,
  disabled,
  className,
  children,
  style
}) => (
  <div className={classNames('nhsuk-list-panel', className)} style={style}>
    <h2 className="nhsuk-list-panel__label" id={id}>
      {label}
    </h2>
    {disabled ? (
      <div className="nhsuk-list-panel__box nhsuk-list-panel__box--with-label">
        <p className="nhsuk-list-panel--results-items__no-results">
          {children}
        </p>
      </div>
    ) : (
      <ul className="nhsuk-list-panel__list nhsuk-list-panel__list--with-label">
        {children}
      </ul>
    )}
    {backToTop ? (
      <div className="nhsuk-back-to-top">
        <a className="nhsuk-back-to-top__link" href={backToTopHref}>
          <svg
            className="nhsuk-icon nhsuk-icon__arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" />
          </svg>
          {backToTopText}
        </a>
      </div>
    ) : null}
  </div>
);

Panel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  backToTop: PropTypes.bool,
  backToTopHref: PropTypes.string,
  backToTopText: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Panel.defaultProps = {
  id: '',
  backToTop: false,
  backToTopHref: '#',
  backToTopText: 'Back to top',
  disabled: false,
  className: '',
  style: {}
};

const ListPanel = ({ children }) => <ol className="nhsuk-list">{children}</ol>;

ListPanel.propTypes = {
  children: PropTypes.node.isRequired
};

ListPanel.Panel = Panel;
ListPanel.Item = Item;

export default ListPanel;
