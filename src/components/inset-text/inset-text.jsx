import React from 'react';
// import './_inset-text.scss';

const InsetText = ({ children }) => (
  <div className="nhsuk-inset-text">
    <span className="nhsuk-u-visually-hidden">Information: </span>
    {children}
  </div>
);

export default InsetText;
