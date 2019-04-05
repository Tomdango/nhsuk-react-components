import React from 'react';
import Fieldset from '../../../fieldset';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';
// import './_textarea.scss';

class Textarea extends React.Component {
  render() {
    const {
      describedBy,
      asPageHeading,
      title,
      hint,
      autoComplete,
      error
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
          id="textarea-with-autocomplete-attribute"
          name="address"
          rows="5"
          autoComplete={autoComplete}
        />
      </Fieldset>
    );
  }
}

export default Textarea;
