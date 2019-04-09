import React from 'react';
import Hint from '../../../hint';
import Heading from '../../../typography/heading';
import ErrorMessage from '../../../error-message';
import Label from '../../../label';
import './_input-block.scss';

const Input = ({
  hint,
  error,
  className,
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
      } ${width ? `nhsuk-input--width-${width}` : null}`}
      id={id || name}
      name={`${name}-hint`}
      type="text"
      onChange={_handleInput}
      aria-describedby={`${name}-hint`}
      autoComplete={autoComplete}
    />
  </div>
);

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

InputBlock.Input = Input;

export default InputBlock;
