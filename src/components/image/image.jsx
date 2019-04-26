import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Image = ({ caption, src, alt, className, style }) => (
  <figure className={classNames('nhsuk-image', className)} style={style}>
    <img className="nhsuk-image__img" src={src} alt={alt} />
    {caption ? (
      <figcaption className="nhsuk-image__caption">{caption}</figcaption>
    ) : null}
  </figure>
);

Image.propTypes = {
  caption: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

Image.defaultProps = {
  caption: '',
  alt: '',
  className: '',
  style: {}
};

export default Image;
