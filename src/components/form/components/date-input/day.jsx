import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DateContext from './DateContext';
import Label from '../../../label';

const Day = ({ label, className, error, ...rest }) => {
  const { handleInput, day, name, passBackError } = useContext(DateContext);
  if (error) {
    passBackError('day', error);
  }
  return (
    <div className="nhsuk-date-input__item">
      <Label htmlFor={`${name}-day`}>{label}</Label>
      <input
        className={classNames(
          'nhsuk-input',
          'nhsuk-date-input__input',
          'nhsuk-input--width-2',
          { 'nhsuk-input--error': error },
          className
        )}
        id={`${name}-day`}
        name={`${name}-day`}
        aria-label={`${name}-day input`}
        onChange={e => handleInput('day', e.target.value)}
        value={day}
        {...rest}
      />
    </div>
  );
};

Day.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string
};

Day.defaultProps = {
  label: 'Day',
  className: '',
  error: ''
};

export default Day;
