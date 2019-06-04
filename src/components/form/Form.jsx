import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormContext from './FormContext';
import { Heading } from '../typography';

class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node.isRequired,
    onErrorChange: PropTypes.func
  };

  static defaultProps = {
    className: '',
    onChange: () => {},
    onSubmit: () => {},
    onErrorChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      erroredComponents: {}
    };
  }

  registerComponent = (name, value) => {
    this.setState(() => {
      const { formData } = this.state;
      formData[name] = value;
      return { formData };
    });
  };

  updateFormState = (name, value) => {
    const { onChange } = this.props;
    this.setState(() => {
      const { formData } = this.state;
      formData[name] = value;
      if (onChange) onChange(formData);
      return { formData };
    });
  };

  onSubmit = e => {
    const { onSubmit } = this.props;
    const { formData } = this.state;
    if (onSubmit) onSubmit(e, formData);
  };

  passBackError = (name, error = true, errorDetails) => {
    const { erroredComponents } = this.state;
    const original = erroredComponents;
    if (error) {
      erroredComponents[name] = errorDetails;
    } else if (Object.keys(erroredComponents).includes(name)) {
      delete erroredComponents[name];
    }

    if (original !== erroredComponents) {
      this.setState({ erroredComponents }, () => {
        const { onErrorChange } = this.props;
        onErrorChange(erroredComponents);
      });
    }
  };

  render() {
    const {
      className,
      children,
      action,
      method,
      title,
      titleSize,
      ...rest
    } = this.props;
    const { erroredComponents } = this.state;
    const contextValue = {
      registerComponent: this.registerComponent,
      updateFormState: this.updateFormState,
      passBackError: this.passBackError
    };
    return (
      <form action={action} method={method} onSubmit={this.onSubmit}>
        <div
          className={classNames(
            'nhsuk-form-group',
            { 'nhsuk-form-group--error': erroredComponents.length > 0 },
            className
          )}
          {...rest}
        >
          {title ? <Heading size={titleSize}>{title}</Heading> : null}
          <FormContext.Provider value={contextValue}>
            {children}
          </FormContext.Provider>
        </div>
      </form>
    );
  }
}

export default Form;
