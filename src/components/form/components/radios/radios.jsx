import React from 'react';
// import './_radios.scss';
import Fieldset from '../../../fieldset';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';

const Radio = ({ children, disabled, hint }) => (
  <div className="nhsuk-radios__item">
    <input
      className="nhsuk-radios__input"
      id="example-1"
      name="example"
      type="radio"
      value="yes"
      disabled={disabled}
    />
    <label className="nhsuk-label nhsuk-radios__label" htmlFor="example-1">
      {children}
    </label>
    {hint ? (
      <span className="nhsuk-hint nhsuk-radios__hint" id="gov-2-item-hint">
        {hint}
      </span>
    ) : null}
  </div>
);

const Divider = ({ children }) => (
  <div className="nhsuk-radios__divider">{children}</div>
);

class Radios extends React.Component {
  render() {
    const {
      describedBy,
      asPageHeading,
      title,
      children,
      hint,
      inline,
      error
    } = this.props;
    return (
      <Fieldset
        describedBy={describedBy}
        asPageHeading={asPageHeading}
        title={title}
      >
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <div
          className={`nhsuk-radios ${inline ? 'nhsuk-radios--inline' : null}`}
        >
          {children}
        </div>
      </Fieldset>
    );
  }
}

Radios.Radio = Radio;
Radios.Divider = Divider;

export default Radios;
