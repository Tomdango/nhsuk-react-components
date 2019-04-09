import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import ErrorMessage from '../../../error-message';
import Fieldset from '../../../fieldset';
import Hint from '../../../hint';

const Box = ({ children, name, _id, value, hint, disabled, _onClick }) => (
  <div className="nhsuk-checkboxes__item">
    <input
      className="nhsuk-checkboxes__input"
      id={_id}
      name={name}
      type="checkbox"
      value={value}
      onClick={_onClick}
      disabled={disabled}
    />
    <label className="nhsuk-label nhsuk-checkboxes__label" htmlFor={_id}>
      {children}
    </label>
    {hint ? <Hint className="nhsuk-checkboxes__hint">{hint}</Hint> : null}
  </div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  _onClick: PropTypes.func.isRequired,
  hint: PropTypes.string,
  disabled: PropTypes.bool
};

Box.defaultProps = {
  hint: '',
  disabled: false
};

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: []
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const checkboxValue = event.target.value;
    const { name, valueCallback } = this.props;
    const { currentValue } = this.state;
    if (currentValue.includes(checkboxValue)) {
      const filteredValues = currentValue.filter(value => {
        return value !== checkboxValue;
      });
      valueCallback(name, filteredValues);
      this.setState({ currentValue: filteredValues });
    } else {
      currentValue.push(checkboxValue);
      valueCallback(name, currentValue);
      this.setState({ currentValue });
    }
  }

  render() {
    const {
      children,
      name,
      describedBy,
      title,
      asPageHeading,
      className,
      error,
      hint,
      style
    } = this.props;
    let checkboxIdNumber = 0;
    const injectedChildren = React.Children.map(children, child => {
      if (child.type === Box) {
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
      <div className={`nhsuk-checkboxes ${className}`} style={style}>
        <Fieldset
          describedBy={describedBy}
          asPageHeading={asPageHeading}
          title={title}
        >
          {hint ? <Hint>{hint}</Hint> : null}
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          {injectedChildren}
        </Fieldset>
      </div>
    );
  }
}

Checkboxes.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  describedBy: PropTypes.string,
  title: PropTypes.string,
  asPageHeading: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType,
  valueCallback: PropTypes.func,
  error: PropTypes.string,
  hint: PropTypes.string
};

Checkboxes.defaultProps = {
  describedBy: '',
  title: '',
  asPageHeading: false,
  className: '',
  style: {},
  valueCallback: () => {},
  error: '',
  hint: ''
};

Checkboxes.Box = Box;

export default Checkboxes;
