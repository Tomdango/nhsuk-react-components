import React from 'react';
// import './_panel.scss';

const Panel = ({ children, label, grey }) => (
  <div
    className={`${label ? 'nhsuk-panel-with-label' : 'nhsuk-panel'} ${
      grey ? 'nhsuk-panel--grey' : ''
    }`}
  >
    {label ? <h3 className="nhsuk-panel-with-label__label">{label}</h3> : null}
    {children}
  </div>
);

export default Panel;
