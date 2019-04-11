import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import Fieldset from '../../../fieldset';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';

const Item = ({ children, value, disabled }) => (
  <option value={value} disabled={disabled}>
    {children}
  </option>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

Item.defaultProps = {
  disabled: false
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { children, registerInitialValue, name } = this.props;
    registerInitialValue(name, '');
    React.Children.forEach(children, child => {
      if (child.props.selected) {
        this.setState({ value: child.props.value });
        registerInitialValue(name, String(child.props.value));
      }
    });
  }

  handleChange(event) {
    const { value } = event.target;
    const { valueCallback, name } = this.props;
    this.setState({ value });
    valueCallback(name, value);
  }

  render() {
    const {
      describedBy,
      asPageHeading,
      title,
      children,
      hint,
      error,
      name,
      id,
      className,
      style
    } = this.props;
    const { value } = this.state;
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
        <select
          value={value}
          onChange={this.handleChange}
          className={`nhsuk-select ${error ? 'nhsuk-select--error' : ''}`}
          id={id || name}
          name={name}
        >
          {children}
        </select>
      </Fieldset>
    );
  }
}

Select.propTypes = {
  describedBy: PropTypes.string,
  asPageHeading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  hint: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  valueCallback: PropTypes.func,
  className: PropTypes.string,
  style: stylePropType,
  registerInitialValue: PropTypes.func
};

Select.defaultProps = {
  describedBy: '',
  asPageHeading: false,
  title: '',
  hint: '',
  error: '',
  id: '',
  valueCallback: () => {},
  className: '',
  style: {},
  registerInitialValue: () => {}
};

Select.Item = Item;

export default Select;
