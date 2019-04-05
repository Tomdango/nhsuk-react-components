import React from 'react';
import Fieldset from '../../../fieldset';
import Label from '../../../label';
// import './_date-input.scss';

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.monthInput = React.createRef();
    this.yearInput = React.createRef();
    this.state = {
      day: Number,
      month: Number,
      year: Number
    };
  }

  handleInput(type, value) {
    this.setState({ [type]: value }, () => {
      const { autoFocus, _valueCallback, name } = this.props;
      _valueCallback(name, this.state);
      if (autoFocus) {
        if (type === 'day' && (value.length === 2 || value > 3)) {
          this.monthInput.focus();
        } else if (type === 'month' && (value.length === 2 || value >= 2)) {
          this.yearInput.focus();
        }
      }
    });
  }

  render() {
    const { describedBy, asPageHeading, title, name, required } = this.props;
    const { day, month, year } = this.state;
    return (
      <Fieldset
        describedBy={describedBy}
        asPageHeading={asPageHeading}
        title={title}
      >
        <div className="nhsuk-date-input" id="dob">
          <div className="nhsuk-date-input__item">
            <div className="nhsuk-form-group">
              <Label htmlFor="dob-day">Day</Label>
              <input
                className="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2"
                id={`${name}-day`}
                name="dob-day"
                type="number"
                value={day}
                onChange={e => this.handleInput('day', e.target.value)}
                pattern="[0-9]*"
                required={required}
              />
            </div>
          </div>
          <div className="nhsuk-date-input__item">
            <div className="nhsuk-form-group">
              <Label htmlFor="dob-month">Month</Label>
              <input
                ref={input => {
                  this.monthInput = input;
                }}
                className="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2"
                id={`${name}-month`}
                name={`${name}-month`}
                type="number"
                value={month}
                onChange={e => this.handleInput('month', e.target.value)}
                pattern="[0-9]*"
                required={required}
              />
            </div>
          </div>
          <div className="nhsuk-date-input__item">
            <div className="nhsuk-form-group">
              <Label htmlFor="dob-year">Year</Label>
              <input
                ref={input => {
                  this.yearInput = input;
                }}
                className="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4"
                id={`${name}-year`}
                name={`${name}-year`}
                value={year}
                onChange={e => this.handleInput('year', e.target.value)}
                type="number"
                pattern="[0-9]*"
                required={required}
              />
            </div>
          </div>
        </div>
      </Fieldset>
    );
  }
}

export default DateInput;
