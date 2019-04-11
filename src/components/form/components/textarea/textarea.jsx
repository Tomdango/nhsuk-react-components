import React from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../../../fieldset';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { name, registerInitialValue } = this.props;
    registerInitialValue(name, '');
  }

  onChange(event) {
    const { name, valueCallback } = this.props;
    valueCallback(name, event.target.value);
  }

  render() {
    const {
      describedBy,
      asPageHeading,
      title,
      hint,
      autoComplete,
      error,
      rows,
      name,
      id
    } = this.props;

    return (
      <Fieldset
        describedBy={describedBy}
        asPageHeading={asPageHeading}
        title={title}
      >
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <textarea
          className="nhsuk-textarea"
          id={name || id}
          onChange={this.onChange}
          name={name}
          rows={rows}
          autoComplete={autoComplete}
        />
      </Fieldset>
    );
  }
}

Textarea.propTypes = {
  describedBy: PropTypes.string,
  asPageHeading: PropTypes.bool,
  title: PropTypes.string,
  hint: PropTypes.string,
  autoComplete: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  valueCallback: PropTypes.func,
  registerInitialValue: PropTypes.func
};

Textarea.defaultProps = {
  describedBy: '',
  asPageHeading: false,
  title: '',
  hint: '',
  autoComplete: '',
  error: '',
  rows: 5,
  id: '',
  valueCallback: () => {},
  registerInitialValue: () => {}
};

export default Textarea;
