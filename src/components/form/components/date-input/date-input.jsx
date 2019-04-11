import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import Fieldset from '../../../fieldset';
import Label from '../../../label';
import ErrorMessage from '../../../error-message';
import Hint from '../../../hint';

const Day = ({
  _name,
  required,
  _day,
  _handleInput,
  label,
  autoComplete,
  error
}) => (
  <div className="nhsuk-date-input__item">
    <div className="nhsuk-form-group">
      <Label htmlFor={`${_name}-day`}>{label}</Label>
      <input
        className={`nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 ${
          error ? 'nhsuk-input--error' : ''
        }`}
        id={`${_name}-day`}
        name={`${_name}-day`}
        aria-label={`${_name}-day input`}
        type="number"
        autoComplete={autoComplete}
        value={_day}
        onChange={e => _handleInput('day', e.target.value)}
        pattern="[0-9]*"
        required={required}
      />
    </div>
  </div>
);

Day.propTypes = {
  _name: PropTypes.string,
  required: PropTypes.bool,
  _day: PropTypes.string,
  _handleInput: PropTypes.func,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  error: PropTypes.bool
};

Day.defaultProps = {
  required: false,
  label: 'Day',
  autoComplete: '',
  error: false,
  _name: '',
  _day: '',
  _handleInput: () => {}
};

const Month = ({
  _registerComponent,
  _name,
  _month,
  _handleInput,
  required,
  label,
  autoComplete,
  error
}) => (
  <div className="nhsuk-date-input__item">
    <div className="nhsuk-form-group">
      <Label htmlFor={`${_name}-day`}>{label}</Label>
      <input
        ref={ref => {
          _registerComponent('month', ref);
        }}
        className={`nhsuk-input nhsuk-date-input__input nhsuk-input--width-2 ${
          error ? 'nhsuk-input--error' : ''
        }`}
        id={`${_name}-month`}
        name={`${_name}-month`}
        aria-label={`${_name}-month input`}
        type="number"
        autoComplete={autoComplete}
        value={_month}
        onChange={e => _handleInput('month', e.target.value)}
        pattern="[0-9]*"
        required={required}
      />
    </div>
  </div>
);

Month.propTypes = {
  _registerComponent: PropTypes.func,
  _name: PropTypes.string,
  _month: PropTypes.string,
  _handleInput: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  error: PropTypes.bool
};

Month.defaultProps = {
  label: 'Month',
  required: false,
  autoComplete: '',
  error: false,
  _registerComponent: () => {},
  _name: '',
  _month: '',
  _handleInput: () => {}
};

const Year = ({
  _registerComponent,
  _name,
  _year,
  _handleInput,
  required,
  label,
  autoComplete,
  error
}) => (
  <div className="nhsuk-date-input__item">
    <div className="nhsuk-form-group">
      <Label htmlFor={`${_name}-day`}>{label}</Label>
      <input
        ref={ref => {
          _registerComponent('year', ref);
        }}
        className={`nhsuk-input nhsuk-date-input__input nhsuk-input--width-4 ${
          error ? 'nhsuk-input--error' : ''
        }`}
        id={`${_name}-year`}
        name={`${_name}-year`}
        autoComplete={autoComplete}
        aria-label={`${_name}-year input`}
        value={_year}
        onChange={e => _handleInput('year', e.target.value)}
        type="number"
        pattern="[0-9]*"
        required={required}
      />
    </div>
  </div>
);

Year.propTypes = {
  _registerComponent: PropTypes.func,
  _name: PropTypes.string,
  _year: PropTypes.string,
  _handleInput: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  error: PropTypes.bool
};

Year.defaultProps = {
  required: false,
  label: 'Year',
  autoComplete: '',
  error: false,
  _registerComponent: () => {},
  _name: '',
  _year: '',
  _handleInput: () => {}
};

const sanitiseInput = (type, value) => {
  if (type === 'day') {
    return value.slice(0, 2);
  }
  if (type === 'month') {
    return value.slice(0, 2);
  }
  return value.slice(0, 4);
};

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.monthInput = React.createRef();
    this.yearInput = React.createRef();
    this.registerComponent = this.registerComponent.bind(this);
    this.injectPropsIntoChildren = this.injectPropsIntoChildren.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      day: '',
      month: '',
      year: ''
    };
  }

  componentDidMount() {
    const { registerInitialValue, name } = this.props;
    registerInitialValue(name, this.state);
  }

  registerComponent(name, ref) {
    if (name === 'month') {
      this.monthInput = ref;
    } else if (name === 'year') {
      this.yearInput = ref;
    }
  }

  handleInput(type, value) {
    const sanitisedInput = sanitiseInput(type, value);
    this.setState({ [type]: sanitisedInput }, () => {
      const { autoFocus, valueCallback, name } = this.props;
      valueCallback(name, this.state);
      if (autoFocus) {
        if (type === 'day' && (value.length === 2 || value > 3)) {
          this.monthInput.focus();
        } else if (type === 'month' && (value.length === 2 || value >= 2)) {
          this.yearInput.focus();
        }
      }
    });
  }

  injectPropsIntoChildren() {
    const { children, name } = this.props;
    const { day, month, year } = this.state;
    return React.Children.map(children, child => {
      switch (child.type.name) {
        case 'Day':
          return React.cloneElement(child, {
            _name: name,
            _day: day,
            _handleInput: this.handleInput
          });
        case 'Month':
          return React.cloneElement(child, {
            _handleInput: this.handleInput,
            _registerComponent: this.registerComponent,
            _name: name,
            _month: month
          });
        case 'Year':
          return React.cloneElement(child, {
            _handleInput: this.handleInput,
            _registerComponent: this.registerComponent,
            _name: name,
            _year: year
          });
        default:
          return child;
      }
    });
  }

  render() {
    const {
      describedBy,
      asPageHeading,
      title,
      name,
      required,
      id,
      error,
      hint,
      className,
      style
    } = this.props;
    const { day, month, year } = this.state;
    const children = this.injectPropsIntoChildren();
    return (
      <Fieldset
        describedBy={describedBy}
        asPageHeading={asPageHeading}
        title={title}
        className={className}
        style={style}
      >
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        <div className="nhsuk-date-input" id={id}>
          {children || (
            <div>
              <Day
                _name={name}
                required={required}
                _handleInput={this.handleInput}
                _day={day}
                error={!!error}
              />
              <Month
                _name={name}
                required={required}
                _handleInput={this.handleInput}
                _registerComponent={this.registerComponent}
                _month={month}
                error={!!error}
              />
              <Year
                _name={name}
                required={required}
                _handleInput={this.handleInput}
                _registerComponent={this.registerComponent}
                _year={year}
                error={!!error}
              />
            </div>
          )}
        </div>
      </Fieldset>
    );
  }
}

DateInput.propTypes = {
  describedBy: PropTypes.string,
  asPageHeading: PropTypes.bool,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  valueCallback: PropTypes.func,
  children: PropTypes.node,
  id: PropTypes.string,
  error: PropTypes.string,
  hint: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType,
  registerInitialValue: PropTypes.func
};

DateInput.defaultProps = {
  describedBy: '',
  asPageHeading: false,
  title: '',
  required: false,
  autoFocus: false,
  children: null,
  id: '',
  error: '',
  hint: '',
  className: '',
  style: {},
  registerInitialValue: () => {},
  valueCallback: () => {}
};

DateInput.Day = Day;
DateInput.Month = Month;
DateInput.Year = Year;

export default DateInput;
