import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import Hint from '../../../hint';
import Heading from '../../../typography/heading';
import ErrorMessage from '../../../error-message';
import Label from '../../../label';
import './_input-block.scss';

const Input = ({
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
}) => (
  <div>
    {title ? <Label>{title}</Label> : null}
    {hint ? <Hint>{hint}</Hint> : null}
    {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    <input
      className={`nhsuk-input nhsuk-input--block ${
        error ? 'nhsuk-input--error' : null
      } ${width ? `nhsuk-input--width-${width}` : null} ${className}`}
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

Input.propTypes = {
  hint: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  _handleInput: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  title: PropTypes.string,
  style: stylePropType
};

Input.defaultProps = {
  hint: '',
  error: '',
  className: '',
  width: NaN,
  id: '',
  autoComplete: '',
  title: '',
  style: {}
};

const InputBlock = ({
  valueCallback,
  children,
  title,
  titleSize,
  className,
  style
}) => {
  const modifiedChildren = React.Children.map(children, child => {
    if (child.type === Input) {
      return React.cloneElement(child, {
        _handleInput: e => {
          valueCallback(child.props.name, e.target.value);
        }
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
  valueCallback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  titleSize: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

InputBlock.defaultProps = {
  title: '',
  titleSize: 'm',
  className: '',
  style: {}
};

InputBlock.Input = Input;

export default InputBlock;
