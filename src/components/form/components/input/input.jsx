import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import Fieldset from '../../../fieldset';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ input: event.target.value }, () => {
      const { valueCallback, name } = this.props;
      const { input } = this.state;
      valueCallback(name, input);
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
      width,
      className,
      style
    } = this.props;

    return (
      <Fieldset
        describedBy={describedBy}
        asPageHeading={asPageHeading}
        title={title}
        className={className}
        style={style}
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
          onChange={this.handleInput}
          aria-describedby={`${name}-hint`}
          autoComplete={autocomplete}
        />
      </Fieldset>
    );
  }
}

Input.propTypes = {
  describedBy: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  asPageHeading: PropTypes.bool,
  autocomplete: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
  width: PropTypes.number,
  valueCallback: PropTypes.func,
  className: PropTypes.string,
  style: stylePropType
};

Input.defaultProps = {
  describedBy: '',
  title: '',
  id: '',
  asPageHeading: false,
  autocomplete: '',
  hint: '',
  error: '',
  width: undefined,
  valueCallback: () => {},
  className: '',
  style: {}
};

export default Input;
