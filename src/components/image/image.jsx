import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = ({ caption, alt, className, ...rest }) => (
  <figure className={classNames('nhsuk-image', className)}>
    <img className="nhsuk-image__img" alt={alt} {...rest} />
    {caption ? (
      <figcaption className="nhsuk-image__caption">{caption}</figcaption>
    ) : null}
  </figure>
);

Image.propTypes = {
  caption: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
};

Image.defaultProps = {
  caption: '',
  alt: '',
  className: ''
};

export default Image;
