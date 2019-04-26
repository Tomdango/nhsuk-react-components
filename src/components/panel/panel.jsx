import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';
import Group from './panel-group';

const Panel = ({ children, label, grey, className, style }) => (
  <div
    className={classNames(
      {
        'nhsuk-panel-with-label': label,
        'nhsuk-panel': !label,
        'nhsuk-panel--grey': grey
      },
      className
    )}
    style={style}
  >
    {label ? <h3 className="nhsuk-panel-with-label__label">{label}</h3> : null}
    {children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  grey: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType
};

Panel.defaultProps = {
  label: '',
  grey: false,
  className: '',
  style: {}
};

Panel.Group = Group;

export default Panel;
