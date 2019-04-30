import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';

const Item = ({ children, value, disabled, className, style }) => (
  <option value={value} disabled={disabled} className={className} style={style}>
    {children}
  </option>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  // This prop is only used in the container element to pull out
  // the default value.
  // eslint-disable-next-line react/no-unused-prop-types
  default: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType
};

Item.defaultProps = {
  disabled: false,
  default: false,
  className: '',
  style: {}
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
      const { props } = child;
      if (props) {
        if (props.default) {
          this.setState({ value: child.props.value });
          registerInitialValue(name, String(child.props.value));
        }
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
      label,
      labelHtmlFor,
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
      <React.Fragment>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <select
          value={value}
          onChange={this.handleChange}
          className={classNames(
            'nhsuk-select',
            {
              'nhsuk-select--error': error
            },
            className
          )}
          style={style}
          id={id || name}
          name={name}
        >
          {children}
        </select>
      </React.Fragment>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  labelHtmlFor: PropTypes.string,
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
  label: '',
  labelHtmlFor: '',
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
