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
  }

  valueCallback(key, value) {
    this.setState(previousState => {
      const previousFormData = previousState.formData;
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
      if (child.props.error) {
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
          style: { ...child.props.style, marginBottom: elementMargin }
        });
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
  elementMargin: PropTypes.number
};

Form.defaultProps = {
  submitAction: '',
  submitMethod: 'GET',
  className: '',
  style: {},
  elementMargin: 0,
  onSubmit: () => {}
};

export default Form;
