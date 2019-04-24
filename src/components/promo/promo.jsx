import React from 'react';
import PropTypes from 'prop-types';
import Group from './promo-group';

const Heading = ({ children }) => (
  <h3 className="nhsuk-promo__heading">{children}</h3>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired
};

const Content = ({ children }) => (
  <p className="nhsuk-promo__description">{children}</p>
);

Content.propTypes = {
  children: PropTypes.node.isRequired
};

const Promo = ({ href, children, imgUrl, imgAlt, small }) => (
  <div className={`nhsuk-promo ${small ? 'nhsuk-promo--small' : ''}`}>
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
  small: PropTypes.bool
};

Promo.defaultProps = {
  href: '#',
  imgUrl: '',
  imgAlt: '',
  small: false
};

Promo.Group = Group;
Promo.Heading = Heading;
Promo.Content = Content;

export default Promo;
