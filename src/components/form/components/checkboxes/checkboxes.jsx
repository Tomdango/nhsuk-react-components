import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from './box';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';
import FormContext from '../../FormContext';
import CheckboxContext from './CheckboxContext';

class Checkboxes extends Component {
  static Box = Box;

  static contextType = FormContext;

  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    label: PropTypes.string,
    labelHtmlFor: PropTypes.string,
    className: PropTypes.string,
    hint: PropTypes.string,
    onChange: PropTypes.func,
    id: PropTypes.string
  };

  static defaultProps = {
    label: '',
    labelHtmlFor: '',
    error: '',
    className: '',
    hint: '',
    onChange: () => {},
    id: ''
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      checkboxes: [],
      _idAssigned: 1
    };
  }

  componentWillMount() {
    const { name, children, error } = this.props;
    const { registerComponent, passBackError } = this.context;
    if (passBackError) passBackError(name, !!error, error);

    const defaultCheckboxes = [];
    React.Children.forEach(children, child => {
      const { type } = child;
      if (type === Checkboxes.Box) {
        const { checked, value } = child.props;
        if (checked) {
          defaultCheckboxes.push(value);
        }
      }
    });
    this.setState({ checkboxes: defaultCheckboxes });
    if (registerComponent) {
      registerComponent(name, defaultCheckboxes);
    }
  }

  componentDidUpdate() {
    const { name, error } = this.props;
    const { passBackError } = this.context;
    if (passBackError) passBackError(name, !!error, error);
  }

  _passValuesContext = () => {
    const { updateFormState } = this.context;
    if (updateFormState) {
      const { checkboxes } = this.state;
      const { name } = this.props;
      updateFormState(name, checkboxes);
    }
  };

  _handleClick = e => {
    const { checked, value } = e.target;
    const { checkboxes } = this.state;
    const { onChange } = this.props;
    if (checkboxes.includes(value) && !checked) {
      const index = checkboxes.indexOf(value);
      checkboxes.splice(index, 1);
      this.setState({ checkboxes }, this._passValuesContext);
    } else {
      this.setState(
        { checkboxes: [...checkboxes, value] },
        this._passValuesContext
      );
    }
    onChange(e);
  };

  modifyChildren = () => {
    const { children, id } = this.props;
    return React.Children.map(children, (child, i) => {
      if (child === null) return child;
      const { type } = child;
      if (type === Checkboxes.Box) {
        return React.cloneElement(child, {
          id: `${id}-box-${i}`
        });
      }
      return child;
    });
  };

  render() {
    const {
      label,
      labelHtmlFor,
      className,
      error,
      hint,
      children,
      ...rest
    } = this.props;

    return (
      <div {...rest} className={classNames('nhsuk-checkboxes', className)}>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <CheckboxContext.Provider value={{ onChange: this._handleClick }}>
          {this.modifyChildren()}
        </CheckboxContext.Provider>
      </div>
    );
  }
}

export default Checkboxes;
