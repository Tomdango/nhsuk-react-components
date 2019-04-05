import React from 'react';
// import './_checkboxes.scss';
import Fieldset from '../../../fieldset';

const Box = ({ children, name, _id, value, _onClick }) => (
  <div className="nhsuk-checkboxes__item">
    <input
      className="nhsuk-checkboxes__input"
      id={_id}
      name={name}
      type="checkbox"
      value={value}
      onClick={() => _onClick(value)}
    />
    <label className="nhsuk-label nhsuk-checkboxes__label" htmlFor={_id}>
      {children}
    </label>
  </div>
);

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: []
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(checkboxValue) {
    const { name, _valueCallback } = this.props;
    const { currentValue } = this.state;
    if (currentValue.includes(checkboxValue)) {
      const filteredValues = currentValue.filter(value => {
        return value !== checkboxValue;
      });
      _valueCallback(name, filteredValues);
      this.setState({ currentValue: filteredValues });
    } else {
      currentValue.push(checkboxValue);
      _valueCallback(name, currentValue);
      this.setState({ currentValue });
    }
  }

  render() {
    const { children, name, describedBy, title, asPageHeading } = this.props;
    let checkboxIdNumber = 0;
    const injectedChildren = React.Children.map(children, child => {
      if (child.type.name === 'Box') {
        checkboxIdNumber += 1;
        return React.cloneElement(child, {
          name,
          _id: `${name}-${checkboxIdNumber}`,
          _onClick: this.onClick
        });
      }
      return child;
    });
    return (
      <div className="nhsuk-checkboxes">
        <Fieldset
          describedBy={describedBy}
          asPageHeading={asPageHeading}
          title={title}
        >
          {injectedChildren}
        </Fieldset>
      </div>
    );
  }
}

Checkboxes.Box = Box;

export default Checkboxes;
