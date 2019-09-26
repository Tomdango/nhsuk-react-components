import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';
import FormContext from '../../FormContext';

class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    labelHtmlFor: PropTypes.string,
    hint: PropTypes.string,
    error: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    value: PropTypes.string,
    initialvalue: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    label: '',
    labelHtmlFor: '',
    hint: '',
    error: '',
    className: '',
    width: undefined,
    value: '',
    initialvalue: '',
    name: ''
  };

  static contextType = FormContext;

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
    this.initialiseComponent();
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({ value });
  }

  componentDidUpdate() {
    const { name, error } = this.props;
    const { passBackError } = this.context;
    if (passBackError) passBackError(name, !!error, error);
  }

  handleInput = e => {
    const { value } = e.target;
    const { name } = this.props;
    const { updateFormState } = this.context;
    if (updateFormState) {
      updateFormState(name, value);
    }
    this.setState({ value });
  };

  initialiseComponent() {
    const { registerComponent, passBackError } = this.context;
    const { name, value, error } = this.props;
    if (registerComponent) {
      registerComponent(name, value);
    }
    if (passBackError) passBackError(name, !!error, error);
  }

  render() {
    const {
      label,
      labelHtmlFor,
      hint,
      error,
      className,
      width,
      name,
      ...rest
    } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <input
          {...rest}
          className={classNames(
            'nhsuk-input',
            { 'nhsuk-input--error': error },
            {
              [`nhsuk-input--width-${width}`]: width,
              className
            }
          )}
          name={`${name}-hint`}
          type="text"
          value={value}
          onChange={this.handleInput}
          aria-describedby={`${name}-hint`}
        />
      </React.Fragment>
    );
  }
}

export default Input;
