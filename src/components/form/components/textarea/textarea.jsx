import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import Label from '../../../label';
import Hint from '../../../hint';
import ErrorMessage from '../../../error-message';

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { name, registerInitialValue } = this.props;
    registerInitialValue(name, '');
  }

  onChange(event) {
    const { name, valueCallback } = this.props;
    valueCallback(name, event.target.value);
  }

  render() {
    const {
      label,
      labelHtmlFor,
      hint,
      autoComplete,
      error,
      rows,
      name,
      id,
      className,
      style
    } = this.props;

    return (
      <React.Fragment>
        {label ? <Label htmlFor={labelHtmlFor}>{label}</Label> : null}
        {hint ? <Hint>{hint}</Hint> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <textarea
          className={classNames('nhsuk-textarea', className)}
          id={name || id}
          onChange={this.onChange}
          name={name}
          style={style}
          rows={rows}
          autoComplete={autoComplete}
        />
      </React.Fragment>
    );
  }
}

Textarea.propTypes = {
  label: PropTypes.string,
  labelHtmlFor: PropTypes.string,
  hint: PropTypes.string,
  autoComplete: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  valueCallback: PropTypes.func,
  registerInitialValue: PropTypes.func,
  className: PropTypes.string,
  style: stylePropType
};

Textarea.defaultProps = {
  label: '',
  labelHtmlFor: '',
  hint: '',
  autoComplete: '',
  error: '',
  rows: 5,
  id: '',
  valueCallback: () => {},
  registerInitialValue: () => {},
  className: '',
  style: {}
};

export default Textarea;
