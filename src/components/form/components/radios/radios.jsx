import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import Fieldset from '../../../fieldset';
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
  <div className={`nhsuk-radios__item ${className}`} style={style}>
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  _onClick: PropTypes.func,
  className: PropTypes.string,
  style: stylePropType
};

Radio.defaultProps = {
  disabled: false,
  hint: '',
  id: '',
  _onClick: () => {},
  className: '',
  style: {}
};

const Divider = ({ children }) => (
  <div className="nhsuk-radios__divider">{children}</div>
);

Divider.propTypes = {
  children: PropTypes.node.isRequired
};

class Radios extends React.Component {
  constructor(props) {
    super(props);
    this.injectChildren = this.injectChildren.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { valueCallback, name } = this.props;
    valueCallback(name, '');
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
      describedBy,
      asPageHeading,
      title,
      hint,
      inline,
      error,
      className,
      style
    } = this.props;
    const children = this.injectChildren();
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
        <div
          className={`nhsuk-radios ${inline ? 'nhsuk-radios--inline' : null}`}
        >
          {children}
        </div>
      </Fieldset>
    );
  }
}

Radios.propTypes = {
  describedBy: PropTypes.string,
  asPageHeading: PropTypes.bool,
  title: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  valueCallback: PropTypes.func,
  className: PropTypes.string,
  style: stylePropType
};

Radios.defaultProps = {
  describedBy: '',
  asPageHeading: false,
  title: '',
  hint: '',
  error: '',
  inline: false,
  valueCallback: () => {},
  className: '',
  style: {}
};

Radios.Radio = Radio;
Radios.Divider = Divider;

export default Radios;
