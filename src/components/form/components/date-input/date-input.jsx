import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContext from '../../FormContext';
import DateContext from './DateContext';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';
import Day from './day';
import Month from './month';
import Year from './year';

export default class DateInput extends Component {
  static contextType = FormContext;

  static Day = Day;

  static Month = Month;

  static Year = Year;

  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    hint: PropTypes.string,
    error: PropTypes.string,
    labelHtmlFor: PropTypes.string,
    name: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool
  };

  static defaultProps = {
    children: null,
    label: '',
    hint: '',
    error: '',
    labelHtmlFor: '',
    autoFocus: false
  };

  static sanitizeInput = (type, value) => {
    const onlyNumbers = value.replace(/\D/g, '');
    if (type === 'day') {
      return onlyNumbers.slice(0, 2);
    }
    if (type === 'month') {
      return onlyNumbers.slice(0, 2);
    }
    return onlyNumbers.slice(0, 4);
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: {
        day: '',
        month: '',
        year: ''
      },
      errors: {
        combined: '',
        day: '',
        month: '',
        year: ''
      }
    };
    this.monthRef = React.createRef();
    this.yearRef = React.createRef();
  }

  componentWillMount() {
    const { name, error } = this.props;
    const { errors } = this.state;

    const { registerComponent, passBackError } = this.context;
    if (registerComponent) {
      const { data } = this.state;
      registerComponent(name, data);
    }
    if (error) {
      this.setState({ errors: { ...errors, combined: error } }, () => {});
    }
  }

  hasError = () => {
    const { errors } = this.state;
    let hasError = false;
    Object.values(errors).forEach(error => {
      if (error !== '') {
        hasError = true;
      }
    });
    return hasError;
  };

  registerRef = (type, ref) => {
    if (type === 'month') {
      this.monthRef = ref;
    } else if (type === 'year') {
      this.yearRef = ref;
    }
  };

  autoFocus = (type, value) => {
    if (type === 'day' && value.length === 2) {
      if (this.monthRef.current !== null) this.monthRef.focus();
    } else if (type === 'month' && value.length === 2) {
      if (this.yearRef.current !== null) this.yearRef.focus();
    }
  };

  handleInput = (type, value) => {
    const { autoFocus, name } = this.props;
    const { data } = this.state;
    const sanitizedValue = DateInput.sanitizeInput(type, value);
    const updatedData = { ...data, [type]: sanitizedValue };
    this.setState({ data: updatedData }, () => {
      if (autoFocus) this.autoFocus(type, sanitizedValue);
      const { updateFormState } = this.context;
      if (updateFormState) {
        updateFormState(name, updatedData);
      }
    });
  };

  passErrorToForm = () => {
    const { errors } = this.state;
    const { name } = this.props;
    const { passBackError } = this.context;
    if (passBackError) passBackError(name, errors);
  };

  passErrorToDate = (type, value) => {
    const { errors } = this.state;
    this.setState(
      { errors: { [type]: value, ...errors } },
      this.passErrorToForm
    );
  };

  render() {
    const {
      children,
      label,
      hint,
      error,
      labelHtmlFor,
      name,
      ...rest
    } = this.props;
    const { day, month, year } = this.state;
    const contextValue = {
      handleInput: this.handleInput,
      registerRef: this.registerRef,
      passBackError: this.passErrorToDate,
      day,
      month,
      year,
      name
    };
    return (
      <>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <div {...rest}>
          <DateContext.Provider value={contextValue}>
            {children || (
              <>
                <Day />
                <Month />
                <Year />
              </>
            )}
          </DateContext.Provider>
        </div>
      </>
    );
  }
}
