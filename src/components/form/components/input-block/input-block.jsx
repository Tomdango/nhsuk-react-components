import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import Hint from '../../../hint';
import Heading from '../../../typography/heading';
import ErrorMessage from '../../../error-message';
import Label from '../../../label';

class Input extends React.Component {
  componentDidMount() {
    const { name, registerInitialValue } = this.props;
    registerInitialValue(name, '');
  }

  render() {
    const {
      hint,
      error,
      className,
      style,
      width,
      id,
      name,
      _handleInput,
      autoComplete,
      label,
      labelHtmlFor
    } = this.props;
    return (
      <React.Fragment>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <input
          className={classNames(
            'nhsuk-input',
            'nhsuk-input--block',
            { 'nhsuk-input--error': error },
            { [`nhsuk-input--width-${width}`]: width },
            className
          )}
          id={id || name}
          name={`${name}-hint`}
          type="text"
          style={style}
          onChange={_handleInput}
          aria-describedby={`${name}-hint`}
          autoComplete={autoComplete}
        />
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  hint: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  _handleInput: PropTypes.func,
  autoComplete: PropTypes.string,
  label: PropTypes.string,
  style: stylePropType,
  registerInitialValue: PropTypes.func,
  labelHtmlFor: PropTypes.string
};

Input.defaultProps = {
  hint: '',
  error: '',
  className: '',
  width: NaN,
  id: '',
  autoComplete: '',
  label: '',
  style: {},
  registerInitialValue: () => {},
  _handleInput: () => {},
  labelHtmlFor: ''
};

const InputBlock = ({
  valueCallback,
  children,
  heading,
  headingSize,
  className,
  style,
  registerInitialValue
}) => {
  const modifiedChildren = React.Children.map(children, child => {
    if (child.type === Input) {
      return React.cloneElement(child, {
        _handleInput: e => {
          valueCallback(child.props.name, e.target.value);
        },
        registerInitialValue
      });
    }
    return child;
  });
  return (
    <div className={className} style={style}>
      {heading ? <Heading size={headingSize}>{heading}</Heading> : null}
      {modifiedChildren}
    </div>
  );
};

InputBlock.propTypes = {
  valueCallback: PropTypes.func,
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  headingSize: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType,
  registerInitialValue: PropTypes.func
};

InputBlock.defaultProps = {
  heading: '',
  headingSize: 'm',
  className: '',
  style: {},
  valueCallback: () => {},
  registerInitialValue: () => {}
};

InputBlock.Input = Input;

export default InputBlock;
