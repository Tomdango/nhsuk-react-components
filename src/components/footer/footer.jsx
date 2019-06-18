import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Link = ({ children, className, id, style, ...rest }) => (
  <li
    className={classNames('nhsuk-footer__list-item', className)}
    style={style}
    id={id}
  >
    <a
      className="nhsuk-footer__list-item-link"
      id={id ? `${id}__link` : null}
      {...rest}
    >
      {children}
    </a>
  </li>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

Link.defaultProps = {
  id: '',
  className: '',
  style: {}
};

const Copyright = ({ children, className, ...rest }) => (
  <p className={classNames('nhsuk-footer__copyright', className)} {...rest}>
    {children}
  </p>
);

Copyright.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Copyright.defaultProps = {
  className: ''
};

const LinkList = ({ children, className, ...rest }) => (
  <>
    <h2 className="nhsuk-u-visually-hidden">Support links</h2>
    <ul className={classNames('nhsuk-footer__list', className)} {...rest}>
      {children}
    </ul>
  </>
);

LinkList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

LinkList.defaultProps = {
  className: ''
};

const Footer = ({
  children,
  className,
  role,
  linksVisuallyHiddenText,
  ...rest
}) => {
  return (
    <footer role={role}>
      <div className={classNames('nhsuk-footer', className)} {...rest}>
        <div className="nhsuk-width-container">{children}</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  id: PropTypes.string,
  role: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  linksVisuallyHiddenText: PropTypes.string
};

Footer.defaultProps = {
  id: 'nhsuk-footer',
  role: 'contentinfo',
  className: '',
  linksVisuallyHiddenText: 'Support links'
};

Footer.Link = Link;
Footer.LinkList = LinkList;
Footer.Copyright = Copyright;

export default Footer;
