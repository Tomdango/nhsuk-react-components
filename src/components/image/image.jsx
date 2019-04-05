import React from 'react';
// import './_image.scss';

const Image = props => {
  const { caption, src, alt } = props;
  return (
    <figure className="nhsuk-image">
      <img className="nhsuk-image__img" src={src} alt={alt} />
      {caption ? (
        <figcaption className="nhsuk-image__caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
};
export default Image;
