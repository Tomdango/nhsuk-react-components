import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Group from './promo-group';

const Heading = ({ children, className, ...rest }) => (
  <h3 className={classNames('nhsuk-promo__heading', className)} {...rest}>
    {children}
  </h3>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Heading.defaultProps = {
  className: ''
};

const Content = ({ children, className, ...rest }) => (
  <p className={classNames('nhsuk-promo__description', className)} {...rest}>
    {children}
  </p>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Content.defaultProps = {
  className: ''
};

const Promo = ({
  href,
  onClick,
  children,
  imgUrl,
  imgAlt,
  small,
  className,
  ...rest
}) => (
  <div
    className={classNames(
      'nhsuk-promo',
      { 'nhsuk-promo--small': small },
      className
    )}
    {...rest}
  >
    <a className="nhsuk-promo__link-wrapper" onClick={onClick} href={href}>
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
  onClick: PropTypes.func
};

Promo.defaultProps = {
  href: '#',
  imgUrl: '',
  imgAlt: '',
  small: false,
  className: '',
  onClick: () => {}
};

Promo.Group = Group;
Promo.Heading = Heading;
Promo.Content = Content;

export default Promo;
