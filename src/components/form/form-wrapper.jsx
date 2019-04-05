import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valueCallback = this.valueCallback.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state.formData);
  }

  handleSubmit(e) {
    const { onSubmit } = this.props;
    if (onSubmit) {
      const { formData } = this.state;
      e.preventDefault();
      onSubmit(formData);
    }
  }

  valueCallback(key, value) {
    const { formData } = this.state;
    this.setState({ formData: { ...formData, [key]: value } });
  }

  render() {
    const { submitAction, submitMethod, children } = this.props;
    let errorInChild = false;
    const modifiedChildren = React.Children.map(children, child => {
      if (child.props.error) {
        errorInChild = true;
      }
      return React.cloneElement(child, {
        _valueCallback: this.valueCallback
      });
    });
    return (
      <form
        action={submitAction}
        method={submitMethod}
        onSubmit={this.handleSubmit}
      >
        <div
          className={`nhsuk-form-group ${
            errorInChild ? 'nhsuk-form-group--error' : null
          }`}
        >
          {modifiedChildren}
        </div>
      </form>
    );
  }
}
