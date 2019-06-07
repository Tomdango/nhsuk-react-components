/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';

const Label = ({ htmlFor, type, children, className, ...rest }) => (
  <label
    id={`${htmlFor}__label`}
    htmlFor={htmlFor}
    className={classNames(
      'nhsuk-label',
      { 'nhsuk-label--s': type === 'bold' },
      { 'nhsuk-label--xl': type === 'heading' },
      className
    )}
    {...rest}
  >
    {children}
  </label>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Label.defaultProps = {
  htmlFor: '',
  type: '',
  className: '',
  style: {}
};

export default Label;
