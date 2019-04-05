import React from 'react';
// import './_fieldset.scss';

const Fieldset = props => {
  const { title, describedBy, asPageHeading, children } = props;
  return (
    <fieldset aria-describedby={describedBy || ''} className="nhsuk-fieldset">
      <legend
        className={`nhsuk-fieldset__legend ${
          asPageHeading ? 'nhsuk-fieldset__legend--xl' : ''
        }`}
      >
        {asPageHeading ? (
          <h1 className="nhsuk-fieldset__heading">{title}</h1>
        ) : (
          title || ''
        )}
      </legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
