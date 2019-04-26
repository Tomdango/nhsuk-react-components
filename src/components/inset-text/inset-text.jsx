import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const InsetText = ({ children, visuallyHiddenText, className, style }) => (
  <div className={classNames('nhsuk-inset-text', className)} style={style}>
    <span className="nhsuk-u-visually-hidden">{visuallyHiddenText} </span>
    {children}
  </div>
);

InsetText.propTypes = {
  children: PropTypes.node.isRequired,
  visuallyHiddenText: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

InsetText.defaultProps = {
  visuallyHiddenText: 'Information:',
  className: '',
  style: {}
};

export default InsetText;
