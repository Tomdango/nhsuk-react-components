import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Heading = ({ children, className, style }) => (
  <h1
    className={classNames('nhsuk-u-margin-bottom-3', className)}
    style={style}
  >
    {children}
  </h1>
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
    className={classNames('nhsuk-body-l', 'nhsuk-u-margin-bottom-0', className)}
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

const Hero = ({ children, imageURL, className, style }) => (
  <section
    className={classNames(
      'nhsuk-hero',
      { 'nhsuk-hero--image': imageURL },
      { 'nhsuk-hero--image-description': imageURL && children !== null },
      className
    )}
    style={{
      backgroundImage: imageURL ? `url('${imageURL}')` : 'none',
      ...style
    }}
  >
    {children ? (
      <div className="nhsuk-hero__overlay">
        <div
          className={classNames('nhsuk-width-container', {
            'nhsuk-hero--border': imageURL
          })}
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
  imageURL: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

Hero.defaultProps = {
  children: null,
  imageURL: '',
  className: '',
  style: {}
};

Hero.Heading = Heading;
Hero.Content = Content;

export default Hero;
