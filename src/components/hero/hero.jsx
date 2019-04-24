import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children }) => (
  <h1 className="nhsuk-u-margin-bottom-3">{children}</h1>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired
};

const Content = ({ children }) => (
  <p className="nhsuk-body-l nhsuk-u-margin-bottom-0">{children}</p>
);

Content.propTypes = {
  children: PropTypes.node.isRequired
};

const Hero = ({ children, imageURL }) => (
  <section
    className={`nhsuk-hero ${imageURL ? 'nhsuk-hero--image' : ''} ${
      imageURL && children ? 'nhsuk-hero--image-description' : ''
    }`}
    style={{ backgroundImage: imageURL ? `url('${imageURL}')` : 'none' }}
  >
    {children ? (
      <div className="nhsuk-hero__overlay">
        <div
          className={`nhsuk-width-container ${
            imageURL ? '' : 'nhsuk-hero--border'
          }`}
        >
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <div className="nhsuk-hero-content">
                {children}
                {imageURL ? (
                  <span className="nhsuk-hero__arrow" aria-hidden="true" />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null}
  </section>
);

Hero.propTypes = {
  children: PropTypes.node,
  imageURL: PropTypes.string
};

Hero.defaultProps = {
  children: null,
  imageURL: ''
};

Hero.Heading = Heading;
Hero.Content = Content;

export default Hero;
