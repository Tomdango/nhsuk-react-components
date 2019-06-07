import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InsetText = ({ children, visuallyHiddenText, className, ...rest }) => (
  <div className={classNames('nhsuk-inset-text', className)} {...rest}>
    <span className="nhsuk-u-visually-hidden">{visuallyHiddenText} </span>
    {children}
  </div>
);

InsetText.propTypes = {
  children: PropTypes.node.isRequired,
  visuallyHiddenText: PropTypes.string,
  className: PropTypes.string
};

InsetText.defaultProps = {
  visuallyHiddenText: 'Information:',
  className: ''
};

export default InsetText;
