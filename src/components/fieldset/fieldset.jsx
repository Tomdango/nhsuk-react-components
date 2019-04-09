import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Fieldset = ({
  title,
  describedBy,
  asPageHeading,
  children,
  className,
  style
}) => (
  <fieldset
    aria-describedby={describedBy}
    className={`nhsuk-fieldset ${className}`}
    style={style}
  >
    <legend
      className={`nhsuk-fieldset__legend ${
        asPageHeading ? 'nhsuk-fieldset__legend--xl' : ''
      }`}
    >
      {asPageHeading ? (
        <h1 className="nhsuk-fieldset__heading nhsuk-fieldset__legend--l">
          {title}
        </h1>
      ) : (
        title
      )}
    </legend>
    {children}
  </fieldset>
);

Fieldset.propTypes = {
  title: PropTypes.string,
  describedBy: PropTypes.string,
  asPageHeading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Fieldset.defaultProps = {
  title: '',
  describedBy: '',
  asPageHeading: false,
  className: '',
  style: {}
};

export default Fieldset;
