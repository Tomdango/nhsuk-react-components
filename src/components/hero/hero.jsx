import React from 'react';
// import './_hero.scss';

const Hero = props => {
  const { content, heading, imageURL } = props;
  return (
    <section
      className={`nhsuk-hero ${imageURL ? 'nhsuk-hero--image' : ''} ${
        imageURL && (content || heading) ? 'nhsuk-hero--image-description' : ''
      }`}
      style={{ backgroundImage: imageURL ? `url('${imageURL}')` : 'none' }}
    >
      {imageURL ? (
        <div className="nhsuk-hero__overlay">
          {heading || content ? (
            <div className="nhsuk-width-container">
              <div className="nhsuk-grid-row">
                <div className="nhsuk-grid-column-two-thirds">
                  <div className="nhsuk-hero-content">
                    {heading ? (
                      <h1 className="nhsuk-u-margin-bottom-3">{heading}</h1>
                    ) : null}
                    {content ? (
                      <p className="nhsuk-body-l nhsuk-u-margin-bottom-0">
                        {content}
                      </p>
                    ) : null}
                    <span className="nhsuk-hero__arrow" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="nhsuk-hero__overlay">
          {heading || content ? (
            <div className="nhsuk-width-container nhsuk-hero--border">
              <div className="nhsuk-grid-row">
                <div className="nhsuk-grid-column-two-thirds">
                  <div className="nhsuk-hero__wrapper">
                    {heading ? (
                      <h1 className="nhsuk-u-margin-bottom-3">{heading}</h1>
                    ) : null}
                    {content ? (
                      <p className="nhsuk-body-l nhsuk-u-margin-bottom-0">
                        {content}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
};

export default Hero;
