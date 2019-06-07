import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Fieldset = ({ title, titleSize, className, children, ...rest }) => (
  <fieldset className={classNames('nhsuk-fieldset', className)} {...rest}>
    {title ? (
      <legend
        className={classNames('nhsuk-fieldset__legend', {
          [`nhsuk-fieldset__legend--${titleSize}`]: titleSize
        })}
      >
        <h1
          className={`nhsuk-fieldset__heading nhsuk-fieldset__legend--${titleSize}`}
        >
          {title}
        </h1>
      </legend>
    ) : null}
    {children}
  </fieldset>
);

Fieldset.propTypes = {
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Fieldset.defaultProps = {
  title: '',
  titleSize: 'm',
  className: ''
};

export default Fieldset;
