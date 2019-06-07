import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Group from './panel-group';

const Panel = ({ children, label, grey, className, ...rest }) => (
  <div
    className={classNames(
      {
        'nhsuk-panel-with-label': label,
        'nhsuk-panel': !label,
        'nhsuk-panel--grey': grey
      },
      className
    )}
    {...rest}
  >
    {label ? <h3 className="nhsuk-panel-with-label__label">{label}</h3> : null}
    {children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  grey: PropTypes.bool,
  className: PropTypes.string
};

Panel.defaultProps = {
  label: '',
  grey: false,
  className: ''
};

Panel.Group = Group;

export default Panel;
