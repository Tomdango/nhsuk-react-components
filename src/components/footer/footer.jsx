import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Link = ({
  href,
  openInNewWindow,
  onClick,
  children,
  className,
  style
}) => (
  <li className={`nhsuk-footer__list-item ${className}`} style={style}>
    <a
      className="nhsuk-footer__list-item-link"
      onClick={onClick}
      target={openInNewWindow ? '_blank' : ''}
      rel={openInNewWindow ? 'noreferrer noopener' : ''}
      href={href}
    >
      {children}
    </a>
  </li>
);

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  openInNewWindow: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType
};

Link.defaultProps = {
  href: '#',
  onClick: () => {},
  openInNewWindow: false,
  className: '',
  style: {}
};

const Copyright = ({ children }) => (
  <p className="nhsuk-footer__copyright">{children}</p>
);

Copyright.propTypes = {
  children: PropTypes.node.isRequired
};

const Footer = ({
  children,
  style,
  className,
  role,
  id,
  linksVisuallyHiddenText
}) => {
  const linksFromChildren = [];
  const childrenWithLinksRemoved = React.Children.map(children, child => {
    if (child.type === Link) {
      linksFromChildren.push(child);
      return null;
    }
    return child;
  });
  return (
    <footer role={role}>
      <div className={`nhsuk-footer ${className}`} style={style} id={id}>
        <div className="nhsuk-width-container">
          {linksFromChildren ? (
            <div>
              <h2 className="nhsuk-u-visually-hidden">
                {linksVisuallyHiddenText}
              </h2>
              <ul className="nhsuk-footer__list">{linksFromChildren}</ul>
            </div>
          ) : null}
          {childrenWithLinksRemoved}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  id: PropTypes.string,
  role: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node.isRequired,
  linksVisuallyHiddenText: PropTypes.string
};

Footer.defaultProps = {
  id: 'nhsuk-footer',
  role: 'contentinfo',
  className: '',
  style: {},
  linksVisuallyHiddenText: 'Support links'
};

Footer.Link = Link;
Footer.Copyright = Copyright;

export default Footer;
