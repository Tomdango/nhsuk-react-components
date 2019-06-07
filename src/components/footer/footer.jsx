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

const Footer = ({
  children,
  className,
  role,
  linksVisuallyHiddenText,
  ...rest
}) => {
  const linksFromChildren = [];
  const childrenWithLinksRemoved = React.Children.map(children, child => {
    if (child.type.name === 'Link') {
      linksFromChildren.push(child);
      return null;
    }
    return child;
  });
  return (
    <footer role={role}>
      <div className={classNames('nhsuk-footer', className)} {...rest}>
        <div className="nhsuk-width-container">
          {linksFromChildren.length !== 0 ? (
            <React.Fragment>
              <h2 className="nhsuk-u-visually-hidden">
                {linksVisuallyHiddenText}
              </h2>
              <ul className="nhsuk-footer__list">{linksFromChildren}</ul>
            </React.Fragment>
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
Footer.Copyright = Copyright;

export default Footer;
