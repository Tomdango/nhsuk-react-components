import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RadioContext from './RadioContext';
import Label from '../../../label';
import Hint from '../../../hint';

const Radio = ({ children, hint, value, _onClick, className, id, ...rest }) => {
  const { name, radioSelected, handleClick } = useContext(RadioContext);
  return (
    <div className="nhsuk-radios__item">
      <input
        className={classNames('nhsuk-radios__input', className)}
        name={name}
        type="radio"
        onChange={handleClick}
        value={value}
        id={id}
        checked={radioSelected === value}
        {...rest}
      />
      <Label className="nhsuk-radios__label" htmlFor={id || ''}>
        {children}
      </Label>
      {hint ? <Hint className="nhsuk-radios__hint">{hint}</Hint> : null}
    </div>
  );
};

Radio.propTypes = {
  children: PropTypes.node.isRequired,
  hint: PropTypes.string,
  name: PropTypes.string,
  _name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  _id: PropTypes.string.isRequired,
  _onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

Radio.defaultProps = {
  hint: '',
  name: '',
  id: '',
  className: ''
};

export default Radio;
