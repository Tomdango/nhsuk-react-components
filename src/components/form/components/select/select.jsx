import React from 'react';
import Fieldset from '../../../fieldset';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';
// import './_select.scss';

const Item = ({ children, value, selected, disabled }) => (
  <option value={value} selected={selected} disabled={disabled}>
    {children}
  </option>
);

class Select extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      describedBy,
      asPageHeading,
      title,
      children,
      hint,
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
        <select
          className={`nhsuk-select ${error ? 'nhsuk-select--error' : ''}`}
          id="select-1"
          name="select-1"
        >
          {children}
        </select>
      </Fieldset>
    );
  }
}

Select.Item = Item;

export default Select;
