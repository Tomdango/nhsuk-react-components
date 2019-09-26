import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormContext from '../../FormContext';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';

export default class Textarea extends Component {
  static contextType = FormContext;

  static propTypes = {
    label: PropTypes.string,
    labelHtmlFor: PropTypes.string,
    hint: PropTypes.string,
    error: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  };

  static defaultProps = {
    label: '',
    labelHtmlFor: '',
    hint: '',
    error: '',
    className: '',
    value: ''
  };

  constructor(props, context) {
    super(props, context);
    const initialState = this.initialiseComponent();
    this.state = initialState;
  }

  componentDidUpdate() {
    const { name, error } = this.props;
    const { passBackError } = this.context;
    if (passBackError) passBackError(name, !!error, error);
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({ text: value }, () => {
      const { updateFormState } = this.context;
      const { name } = this.props;
      if (updateFormState) {
        updateFormState(name, value);
      }
    });
  };

  initialiseComponent() {
    const { name, value, error } = this.props;
    const { registerComponent, passBackError } = this.context;
    if (registerComponent) {
      registerComponent(name, value);
    }
    if (passBackError) passBackError(name, !!error, error);
    return {
      text: value || ''
    };
  }

  render() {
    const {
      label,
      labelHtmlFor,
      hint,
      error,
      className,
      value,
      ...rest
    } = this.props;
    const { text } = this.state;
    return (
      <>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <textarea
          value={text}
          className={classNames(
            'nhsuk-textarea',
            { 'nhsuk-textarea--error': error },
            className
          )}
          onChange={this.onChange}
          {...rest}
        />
      </>
    );
  }
}
