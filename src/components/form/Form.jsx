import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';
import FormContext from './FormContext';
import { Heading } from '../typography';

class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node.isRequired,
    onErrorChange: PropTypes.func,
    title: PropTypes.string,
    titleSize: PropTypes.string,
    style: stylePropType
  };

  static defaultProps = {
    className: '',
    onChange: () => {},
    onSubmit: () => {},
    onErrorChange: () => {},
    title: '',
    titleSize: 'xl',
    style: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      errorState: {}
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
    const { errorState } = this.state;
    if (!Object.keys(errorState).includes(name) && error === true) {
      this.setState(
        { errorState: { [name]: errorDetails, ...errorState } },
        this.errorCallback
      );
    }
  };

  errorCallback = () => {
    const { errorState } = this.state;
    const { onErrorChange } = this.props;
    onErrorChange(errorState);
  };

  render() {
    const {
      className,
      children,
      title,
      titleSize,
      style,
      ...rest
    } = this.props;
    const { errorState } = this.state;
    const contextValue = {
      registerComponent: this.registerComponent,
      updateFormState: this.updateFormState,
      passBackError: this.passBackError
    };
    return (
      <form {...rest} onSubmit={this.onSubmit}>
        <div
          className={classNames(
            'nhsuk-form-group',
            { 'nhsuk-form-group--error': Object.keys(errorState).length > 0 },
            className
          )}
          style={style}
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
