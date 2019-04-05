import React from 'react';
import Fieldset from '../../../fieldset';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';
// import './_input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(inputValue) {
    this.setState({ input: inputValue }, () => {
      const { _valueCallback, name } = this.props;
      _valueCallback(name, this.state);
    });
  }

  render() {
    const {
      describedBy,
      title,
      id,
      name,
      asPageHeading,
      autocomplete,
      hint,
      error,
      width
    } = this.props;
    return (
      <Fieldset
        describedBy={describedBy}
        asPageHeading={asPageHeading}
        title={title}
      >
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <input
          className={`nhsuk-input ${error ? 'nhsuk-input--error' : null} ${
            width ? `nhsuk-input--width-${width}` : null
          }`}
          id={id || name}
          name={`${name}-hint`}
          type="text"
          aria-describedby={`${name}-hint`}
          autoComplete={autocomplete}
        />
      </Fieldset>
    );
  }
}

export default Input;
