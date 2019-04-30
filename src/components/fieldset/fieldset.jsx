import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

class Fieldset extends React.Component {
  constructor(props) {
    super(props);
    this.attachCallbackToChildren = this.attachCallbackToChildren.bind(this);
  }

  attachCallbackToChildren() {
    const {
      valueCallback,
      registerInitialValue,
      elementMargin,
      callbackErrorFromChild,
      children
    } = this.props;
    return React.Children.map(children, child => {
      const formElements = [
        'Checkboxes',
        'DateInput',
        'Input',
        'Fieldset',
        'InputBlock',
        'Radios',
        'Select',
        'Textarea'
      ];
      const { props } = child;
      if (props) {
        if (props.error) {
          callbackErrorFromChild(true);
        }

        if (formElements.includes(child.type.name)) {
          return React.cloneElement(child, {
            valueCallback,
            style: { ...child.props.style, marginBottom: elementMargin },
            registerInitialValue,
            callbackErrorFromChild
          });
        }
      }
      return child;
    });
  }

  render() {
    const { title, titleSize, className, style } = this.props;
    return (
      <fieldset
        className={classNames('nhsuk-fieldset', className)}
        style={style}
      >
        {title ? (
          <legend
            className={classNames('nhsuk-fieldset__legend', {
              [`nhsuk-fieldset__legend--${titleSize}`]: titleSize
            })}
          >
            <h1
              className={`nhsuk-fieldset__heading nhsuk-fieldset__legend--${titleSize}`}
            >
              {title}
            </h1>
          </legend>
        ) : null}
        {this.attachCallbackToChildren()}
      </fieldset>
    );
  }
}

Fieldset.propTypes = {
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType,
  valueCallback: PropTypes.func,
  registerInitialValue: PropTypes.func,
  elementMargin: PropTypes.number,
  callbackErrorFromChild: PropTypes.func
};

Fieldset.defaultProps = {
  title: '',
  titleSize: 'm',
  className: '',
  style: {},
  valueCallback: () => {},
  registerInitialValue: () => {},
  elementMargin: 0,
  callbackErrorFromChild: () => {}
};

export default Fieldset;
