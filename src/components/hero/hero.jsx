import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Heading = ({ children, className, ...rest }) => (
  <h1 className={classNames('nhsuk-u-margin-bottom-3', className)} {...rest}>
    {children}
  </h1>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Heading.defaultProps = {
  className: ''
};

const Content = ({ children, className, ...rest }) => (
  <p
    className={classNames('nhsuk-body-l', 'nhsuk-u-margin-bottom-0', className)}
    {...rest}
  >
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

const Hero = ({ children, imageURL, className, style, ...rest }) => (
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
    {...rest}
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
              {imageURL ? (
                <div className="nhsuk-hero-content">
                  {children}
                  <span className="nhsuk-hero__arrow" aria-hidden="true" />
                </div>
              ) : (
                <div className="nhsuk-hero__wrapper">{children}</div>
              )}
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
