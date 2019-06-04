import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DateContext from './DateContext';
import Label from '../../../label';

const Year = ({ label, className, error, ...rest }) => {
  const { handleInput, year, registerRef, name } = useContext(DateContext);
  return (
    <div className="nhsuk-date-input__item">
      <Label htmlFor={`${name}-year`}>{label}</Label>
      <input
        className={classNames(
          'nhsuk-input',
          'nhsuk-date-input__input',
          'nhsuk-input--width-4',
          { 'nhsuk-input--error': error },
          className
        )}
        ref={ref => registerRef('year', ref)}
        id={`${name}-year`}
        name={`${name}-year`}
        aria-label={`${name}-year input`}
        onChange={e => handleInput('year', e.target.value)}
        value={year}
        {...rest}
      />
    </div>
  );
};

Year.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool
};

Year.defaultProps = {
  label: 'Year',
  className: '',
  error: false
};

export default Year;
