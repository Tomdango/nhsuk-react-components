import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DateContext from './DateContext';
import Label from '../../../label';

const Month = ({ label, className, error, ...rest }) => {
  const { handleInput, month, registerRef, name } = useContext(DateContext);
  return (
    <div className="nhsuk-date-input__item">
      <Label htmlFor={`${name}-month`}>{label}</Label>
      <input
        className={classNames(
          'nhsuk-input',
          'nhsuk-date-input__input',
          'nhsuk-input--width-2',
          { 'nhsuk-input--error': error },
          className
        )}
        ref={ref => registerRef('month', ref)}
        id={`${name}-month`}
        name={`${name}-month`}
        aria-label={`${name}-month input`}
        onChange={e => handleInput('month', e.target.value)}
        value={month}
        {...rest}
      />
    </div>
  );
};

Month.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool
};

Month.defaultProps = {
  label: 'Month',
  className: '',
  error: false
};

export default Month;
