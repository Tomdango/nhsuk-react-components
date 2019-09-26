import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FormContext from '../../FormContext';
import RadioContext from './RadioContext';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';
import Radio from './radio';
import Divider from './divider';

class Radios extends PureComponent {
  static Radio = Radio;

  static Divider = Divider;

  static contextType = FormContext;

  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    hint: PropTypes.string,
    error: PropTypes.string,
    labelHtmlFor: PropTypes.string,
    className: PropTypes.string,
    inline: PropTypes.bool,
    id: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    label: '',
    hint: '',
    error: '',
    id: '',
    labelHtmlFor: '',
    className: '',
    inline: false
  };

  constructor(props, context) {
    super(props, context);
    const initialState = this.initialiseComponent();
    this.state = initialState;
  }

  componentDidUpdate() {
    const { name, error } = this.props;
    const { passBackError } = this.context;
    if (passBackError) passBackError(name, !!error, error);
  }

  _passValuesContext = () => {
    const { updateFormState } = this.context;
    if (updateFormState) {
      const { radioSelected } = this.state;
      const { name } = this.props;
      updateFormState(name, radioSelected);
    }
  };

  _handleClick = e => {
    const { value } = e.target;
    this.setState({ radioSelected: value }, this._passValuesContext);
  };

  modifiedChildren = () => {
    const { children, id } = this.props;
    return React.Children.map(children, (child, i) => {
      if (child === null) return child;
      const { type } = child;
      if (type === Radios.Radio) {
        return React.cloneElement(child, {
          id: `${id}-radio-${i}`
        });
      }
      return child;
    });
  };

  initialiseComponent() {
    const { name, children, error } = this.props;
    const { registerComponent, passBackError } = this.context;
    if (passBackError) passBackError(name, !!error, error);
    let radioSelected = '';
    React.Children.forEach(children, child => {
      const { type } = child;
      if (type === Radios.Radio) {
        const { selected, value } = child.props;
        if (selected) {
          radioSelected = value.toString();
        }
      }
    });
    if (registerComponent) {
      registerComponent(name, radioSelected);
    }
    return { radioSelected };
  }

  render() {
    const {
      label,
      hint,
      error,
      name,
      labelHtmlFor,
      className,
      inline,
      children,
      ...rest
    } = this.props;
    const { radioSelected } = this.state;
    const contextValue = {
      name,
      handleClick: this._handleClick,
      radioSelected
    };
    return (
      <>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <div
          className={classNames(
            'nhsuk-radios',
            { 'nhsuk-radios--inline': inline },
            className
          )}
          {...rest}
        >
          <RadioContext.Provider value={contextValue}>
            {this.modifiedChildren()}
          </RadioContext.Provider>
        </div>
      </>
    );
  }
}

export default Radios;
