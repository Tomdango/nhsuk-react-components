import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from '../../../label';
import Hint from '../../../hint';
import CheckboxContext from './CheckboxContext';

const Box = ({ children, _id, hint, className, checked, ...rest }) => {
  const { onChange } = useContext(CheckboxContext);
  return (
    <div className="nhsuk-checkboxes__item">
      <input
        id={_id}
        onChange={onChange}
        aria-describedby={`${_id}__label`}
        type="checkbox"
        className={classNames('nhsuk-checkboxes__input', className)}
        {...rest}
      />
      <Label htmlFor={_id} className="nhsuk-checkboxes__label">
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
