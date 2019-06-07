import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from '../../../label';
import Hint from '../../../hint';
import CheckboxContext from './CheckboxContext';

const Box = ({ children, id, hint, className, checked, ...rest }) => {
  const { onChange } = useContext(CheckboxContext);
  const [selectedState, setSelectedState] = useState(checked);
  return (
    <div className="nhsuk-checkboxes__item">
      <input
        onChange={e => {
          setSelectedState(e.target.checked);
          onChange(e);
        }}
        id={id}
        aria-describedby={`${id}__label`}
        type="checkbox"
        checked={selectedState}
        className={classNames('nhsuk-checkboxes__input', className)}
        {...rest}
      />
      <Label htmlFor={id} className="nhsuk-checkboxes__label">
        {children}
      </Label>
      {hint ? <Hint className="nhsuk-checkboxes__hint">{hint}</Hint> : null}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  hint: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool
};

Box.defaultProps = {
  hint: '',
  className: '',
  checked: false
};

export default Box;
