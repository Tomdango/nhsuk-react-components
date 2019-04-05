import React from 'react';
// import './_warning-callout.scss';

const WarningCallout = ({ heading, children }) => (
  <div className="nhsuk-warning-callout">
    <h3 className="nhsuk-warning-callout__label">{heading}</h3>
    {children}
  </div>
);

export default WarningCallout;
