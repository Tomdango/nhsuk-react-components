import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ caption, src, alt }) => (
  <figure className="nhsuk-image">
    <img className="nhsuk-image__img" src={src} alt={alt} />
    {caption ? (
      <figcaption className="nhsuk-image__caption">{caption}</figcaption>
    ) : null}
  </figure>
);

Image.propTypes = {
  caption: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Image.defaultProps = {
  caption: '',
  alt: ''
};

export default Image;
