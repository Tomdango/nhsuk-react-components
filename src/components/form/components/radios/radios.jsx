import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';

const Radio = ({
  children,
  disabled,
  hint,
  id,
  name,
  value,
  _onClick,
  className,
  style
}) => (
  <div className={classNames('nhsuk-radios__item', className)} style={style}>
    <input
      className="nhsuk-radios__input"
      id={id}
      name={name}
      type="radio"
      onClick={_onClick}
      value={value}
      disabled={disabled}
    />
    <label className="nhsuk-label nhsuk-radios__label" htmlFor={id}>
      {children}
    </label>
    {hint ? <Hint className="nhsuk-radios__hint">{hint}</Hint> : null}
  </div>
);

Radio.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  _onClick: PropTypes.func,
  className: PropTypes.string,
  style: stylePropType
};

Radio.defaultProps = {
  disabled: false,
  hint: '',
  id: '',
  name: '',
  _onClick: () => {},
  className: '',
  style: {}
};

const Divider = ({ children, className, style }) => (
  <div className={classNames('nhsuk-radios__divider', className)} style={style}>
    {children}
  </div>
);

Divider.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Divider.defaultProps = {
  className: '',
  style: {}
};

class Radios extends React.Component {
  constructor(props) {
    super(props);
    this.injectChildren = this.injectChildren.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { registerInitialValue, name } = this.props;
    registerInitialValue(name, '');
  }

  onClick(event) {
    const { name, valueCallback } = this.props;
    valueCallback(name, event.target.value);
  }

  injectChildren() {
    const { children, name } = this.props;
    let idCounter = 0;
    return React.Children.map(children, child => {
      if (child.type === Radio) {
        idCounter += 1;
        return React.cloneElement(child, {
          name,
          id: `${name}-${idCounter}`,
          _onClick: this.onClick
        });
      }
      return child;
    });
  }

  render() {
    const {
      hint,
      inline,
      error,
      label,
      labelHtmlFor,
      className,
      style
    } = this.props;
    const children = this.injectChildren();
    return (
      <React.Fragment>
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        {label ? <Label htmlFor={labelHtmlFor}>Label</Label> : null}
        <div
          className={classNames(
            'nhsuk-radios',
            {
              'nhsuk-radios--inline': inline
            },
            className
          )}
          style={style}
        >
          {children}
        </div>
      </React.Fragment>
    );
  }
}

Radios.propTypes = {
  label: PropTypes.string,
  labelHtmlFor: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  valueCallback: PropTypes.func,
  className: PropTypes.string,
  style: stylePropType,
  registerInitialValue: PropTypes.func
};

Radios.defaultProps = {
  label: '',
  labelHtmlFor: '',
  hint: '',
  error: '',
  inline: false,
  valueCallback: () => {},
  className: '',
  style: {},
  registerInitialValue: () => {}
};

Radios.Radio = Radio;
Radios.Divider = Divider;

export default Radios;
