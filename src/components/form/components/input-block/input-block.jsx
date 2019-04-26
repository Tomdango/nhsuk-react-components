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
      title
    } = this.props;
    return (
      <div>
        {title ? <Label>{title}</Label> : null}
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
      </div>
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
  title: PropTypes.string,
  style: stylePropType,
  registerInitialValue: PropTypes.func
};

Input.defaultProps = {
  hint: '',
  error: '',
  className: '',
  width: NaN,
  id: '',
  autoComplete: '',
  title: '',
  style: {},
  registerInitialValue: () => {},
  _handleInput: () => {}
};

const InputBlock = ({
  valueCallback,
  children,
  title,
  titleSize,
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
      {title ? <Heading titleSize={titleSize}>{title}</Heading> : null}
      {modifiedChildren}
    </div>
  );
};

InputBlock.propTypes = {
  valueCallback: PropTypes.func,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  titleSize: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType,
  registerInitialValue: PropTypes.func
};

InputBlock.defaultProps = {
  title: '',
  titleSize: 'm',
  className: '',
  style: {},
  valueCallback: () => {},
  registerInitialValue: () => {}
};

InputBlock.Input = Input;

export default InputBlock;
