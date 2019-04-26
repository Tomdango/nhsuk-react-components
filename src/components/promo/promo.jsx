import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';
import Group from './promo-group';

const Heading = ({ children, className, style }) => (
  <h3 className={classNames('nhsuk-promo__heading', className)} style={style}>
    {children}
  </h3>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Heading.defaultProps = {
  className: '',
  style: {}
};

const Content = ({ children, className, style }) => (
  <p
    className={classNames('nhsuk-promo__description', className)}
    style={style}
  >
    {children}
  </p>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Content.defaultProps = {
  className: '',
  style: {}
};

const Promo = ({ href, children, imgUrl, imgAlt, small, className, style }) => (
  <div
    className={classNames(
      'nhsuk-promo',
      { 'nhsuk-promo--small': small },
      className
    )}
    style={style}
  >
    <a className="nhsuk-promo__link-wrapper" href={href}>
      {imgUrl ? (
        <img className="nhsuk-promo__img" src={imgUrl} alt={imgAlt} />
      ) : null}
      <div className="nhsuk-promo__content">{children}</div>
    </a>
  </div>
);

Promo.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  small: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType
};

Promo.defaultProps = {
  href: '#',
  imgUrl: '',
  imgAlt: '',
  small: false,
  className: '',
  style: {}
};

Promo.Group = Group;
Promo.Heading = Heading;
Promo.Content = Content;

export default Promo;
