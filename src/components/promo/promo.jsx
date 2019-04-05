import React from 'react';
// import './_promo.scss';

const Promo = ({ href, heading, description, imgURL, small }) => (
  <div className={`nhsuk-promo ${small ? 'nhsuk-promo--small' : null}`}>
    <a className="nhsuk-promo__link-wrapper" href={href || '#'}>
      {imgURL ? <img className="nhsuk-promo__img" src={imgURL} alt="" /> : null}
      <div className="nhsuk-promo__content">
        <h3 className="nhsuk-promo__heading">{heading}</h3>
        {description ? (
          <p className="nhsuk-promo__description">{description}</p>
        ) : null}
      </div>
    </a>
  </div>
);

export default Promo;
