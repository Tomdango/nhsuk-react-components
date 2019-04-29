import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import Heading from '../typography/heading';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      errorInChild: false
    };
    this.valueCallback = this.valueCallback.bind(this);
    this.registerInitialValue = this.registerInitialValue.bind(this);
    this.callbackErrorFromChild = this.callbackErrorFromChild.bind(this);
  }

  componentWillMount() {
    const { children } = this.props;
    const { errorInChild } = this.state;
    React.Children.forEach(children, child => {
      const { props } = child;
      if (props) {
        if (props.error && !errorInChild) {
          this.setState({ errorInChild: true });
        }
      }
    });
  }

  registerInitialValue(key, value) {
    this.setState(previousState => {
      const previousFormData = previousState.formData;
      return { formData: { ...previousFormData, [key]: value } };
    });
  }

  valueCallback(key, value) {
    const { onChange } = this.props;
    this.setState(previousState => {
      const previousFormData = previousState.formData;
      onChange({ formData: { ...previousFormData, [key]: value } });
      return { formData: { ...previousFormData, [key]: value } };
    });
  }

  callbackErrorFromChild(errorInChild) {
    this.setState({ errorInChild });
  }

  render() {
    const {
      submitAction,
      submitMethod,
      children,
      style,
      className,
      title,
      titleSize,
      elementMargin,
      onSubmit
    } = this.props;
    const { formData } = this.state;
    const { errorInChild } = this.state;
    const modifiedChildren = React.Children.map(children, child => {
      const { props } = child;
      if (props) {
        const formElements = [
          'Checkboxes',
          'DateInput',
          'Input',
          'Fieldset',
          'InputBlock',
          'Radios',
          'Select',
          'Textarea'
        ];
        if (formElements.includes(child.type.name)) {
          return React.cloneElement(child, {
            valueCallback: this.valueCallback,
            style: { ...child.props.style, marginBottom: elementMargin },
            elementMargin,
            registerInitialValue: this.registerInitialValue,
            callbackErrorFromChild: this.callbackErrorFromChild
          });
        }
        return child;
      }
      return child;
    });
    return (
      <form
        action={submitAction}
        method={submitMethod}
        onSubmit={e => onSubmit(e, formData)}
      >
        {title ? <Heading size={titleSize}>{title}</Heading> : null}
        <div
          className={classNames(
            'nhsuk-form-group',
            { 'nhsuk-form-group--error': errorInChild },
            className
          )}
          style={style}
        >
          {modifiedChildren}
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  submitAction: PropTypes.string,
  submitMethod: PropTypes.string,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  style: stylePropType,
  elementMargin: PropTypes.number,
  onChange: PropTypes.func,
  title: PropTypes.string,
  titleSize: PropTypes.string
};

Form.defaultProps = {
  submitAction: '',
  submitMethod: 'GET',
  className: '',
  style: {},
  elementMargin: 0,
  onSubmit: () => {},
  onChange: () => {},
  title: '',
  titleSize: 'm'
};

export default Form;
