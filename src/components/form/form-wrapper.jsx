import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './_form.scss';
import Heading from '../typography/heading';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
    this.valueCallback = this.valueCallback.bind(this);
    this.registerInitialValue = this.registerInitialValue.bind(this);
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
    let errorInChild = false;
    const modifiedChildren = React.Children.map(children, child => {
      const { props } = child;
      if (props) {
        if (props.error) {
          errorInChild = true;
        }
        const formElements = [
          'Checkboxes',
          'DateInput',
          'Input',
          'InputBlock',
          'Radios',
          'Select',
          'Textarea'
        ];
        if (formElements.includes(child.type.name)) {
          return React.cloneElement(child, {
            valueCallback: this.valueCallback,
            style: { ...child.props.style, marginBottom: elementMargin },
            registerInitialValue: this.registerInitialValue
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
          className={`nhsuk-form-group ${
            errorInChild ? 'nhsuk-form-group--error' : null
          } ${className}`}
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
  onChange: PropTypes.func
};

Form.defaultProps = {
  submitAction: '',
  submitMethod: 'GET',
  className: '',
  style: {},
  elementMargin: 0,
  onSubmit: () => {},
  onChange: () => {}
};

export default Form;
