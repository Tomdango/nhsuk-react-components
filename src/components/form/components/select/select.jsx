import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormContext from '../../FormContext';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';
import Option from './option';

export default class Select extends Component {
  static contextType = FormContext;

  static Option = Option;

  static propTypes = {
    label: PropTypes.string,
    labelHtmlFor: PropTypes.string,
    hint: PropTypes.string,
    error: PropTypes.string,
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
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
    this.state = {
      selectedValue: ''
    };
  }

  componentWillMount() {
    const { name, value, error } = this.props;
    const { passBackError } = this.context;
    if (passBackError) passBackError(name, !!error, error);
    this.setState({ selectedValue: value }, () => {
      const { registerComponent } = this.context;
      if (registerComponent) {
        registerComponent(name, value);
      }
    });
  }

  componentDidMount() {
    const { name, error } = this.props;
    const { passBackError } = this.context;
    if (passBackError) passBackError(name, !!error, error);
  }

  componentDidUpdate() {
    const { name, error } = this.props;
    const { passBackError } = this.context;
    if (passBackError) passBackError(name, !!error, error);
  }

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ selectedValue: value }, () => {
      const { updateFormState } = this.context;
      if (updateFormState) {
        updateFormState(name, value);
      }
    });
  };

  render() {
    const {
      label,
      labelHtmlFor,
      hint,
      error,
      name,
      children,
      className,
      value,
      ...rest
    } = this.props;
    const { selectedValue } = this.state;
    return (
      <>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}

        <select
          className={classNames(
            'nhsuk-select',
            {
              'nhsuk-select--error': error
            },
            className
          )}
          onChange={this.onChange}
          name={name}
          value={selectedValue}
          {...rest}
        >
          {children}
        </select>
      </>
    );
  }
}
