import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DateContext from './DateContext';
import Label from '../../../label';

const Month = ({ label, className, value, error, ...rest }) => {
  const {
    handleInput,
    month,
    registerRef,
    name,
    parentError,
    passBackError
  } = useContext(DateContext);
  if (passBackError) {
    passBackError('year', error);
  }
  return (
    <div className="nhsuk-date-input__item">
      <Label htmlFor={`${name}-month`}>{label}</Label>
      <input
        className={classNames(
          'nhsuk-input',
          'nhsuk-date-input__input',
          'nhsuk-input--width-2',
          { 'nhsuk-input--error': error || parentError },
          className
        )}
        ref={ref => registerRef('month', ref)}
        id={`${name}-month`}
        name={`${name}-month`}
        aria-label={`${name}-month input`}
        onChange={e => handleInput('month', e.target.value)}
        value={month || value}
        {...rest}
      />
    </div>
  );
};

Month.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.string
};

Month.defaultProps = {
  label: 'Month',
  className: '',
  error: false,
  value: ''
};

export default Month;
