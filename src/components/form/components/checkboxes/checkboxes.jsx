import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import ErrorMessage from '../../../error-message';
import Hint from '../../../hint';
import Label from '../../../label';

const Box = ({
  children,
  name,
  _id,
  value,
  hint,
  disabled,
  _onClick,
  className,
  style
}) => (
  <div
    className={classNames('nhsuk-checkboxes__item', className)}
    style={style}
  >
    <input
      className="nhsuk-checkboxes__input"
      id={_id}
      name={name}
      type="checkbox"
      value={value}
      onClick={_onClick}
      aria-describedby={`${_id}__label`}
      disabled={disabled}
    />
    <Label htmlFor={_id} className="nhsuk-checkboxes__label">
      {children}
    </Label>
    {hint ? <Hint className="nhsuk-checkboxes__hint">{hint}</Hint> : null}
  </div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  _id: PropTypes.string,
  value: PropTypes.string.isRequired,
  _onClick: PropTypes.func,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType
};

Box.defaultProps = {
  hint: '',
  disabled: false,
  name: '',
  _id: '',
  _onClick: () => {},
  className: '',
  style: {}
};

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: []
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { name, registerInitialValue } = this.props;
    registerInitialValue(name, []);
  }

  onClick(event) {
    const checkboxValue = event.target.value;
    const { name, valueCallback } = this.props;
    const { currentValue } = this.state;
    if (currentValue.includes(checkboxValue)) {
      const filteredValues = currentValue.filter(
        value => value !== checkboxValue
      );
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
      label,
      labelHtmlFor,
      className,
      id,
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
      <div
        id={id}
        className={classNames('nhsuk-checkboxes', className)}
        style={style}
      >
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        {injectedChildren}
      </div>
    );
  }
}

Checkboxes.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelHtmlFor: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType,
  valueCallback: PropTypes.func,
  error: PropTypes.string,
  hint: PropTypes.string,
  registerInitialValue: PropTypes.func
};

Checkboxes.defaultProps = {
  label: '',
  labelHtmlFor: '',
  className: '',
  style: {},
  id: '',
  valueCallback: () => {},
  error: '',
  hint: '',
  registerInitialValue: () => {}
};

Checkboxes.Box = Box;

export default Checkboxes;
