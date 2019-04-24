import React from 'react';
import PropTypes from 'prop-types';
import Group from './panel-group';

const Panel = ({ children, label, grey }) => (
  <div
    className={`${label ? 'nhsuk-panel-with-label' : 'nhsuk-panel'} ${
      grey ? 'nhsuk-panel--grey' : ''
    }`}
  >
    {label ? <h3 className="nhsuk-panel-with-label__label">{label}</h3> : null}
    {children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  grey: PropTypes.bool
};

Panel.defaultProps = {
  label: '',
  grey: false
};

Panel.Group = Group;

export default Panel;
