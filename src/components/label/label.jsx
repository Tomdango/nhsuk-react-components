/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Label = ({ htmlForId, type, children }) => (
  <label
    htmlFor={htmlForId}
    className={`nhsuk-label  ${type === 'bold' ? 'nhsuk-label--s' : ''} ${
      type === 'heading' ? 'nhsuk-label--xl' : ''
    }`}
  >
    {children}
  </label>
);

export default Label;
