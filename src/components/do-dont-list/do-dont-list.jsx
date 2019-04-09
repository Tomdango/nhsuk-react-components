import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { Tick, Cross } from '../icons';

const Do = ({ children, className, style }) => (
  <li className={className} style={style}>
    <Tick />
    {children}
  </li>
);

const Dont = ({ children, className, style }) => (
  <li className={className} style={style}>
    <Cross />
    {children}
  </li>
);

const DoDontList = ({ title, type, children, className, style }) => (
  <div className={`nhsuk-do-dont-list ${className}`} style={style}>
    <h3 className="nhsuk-do-dont-list__label">{title}</h3>
    <ul className={`nhsuk-list nhsuk-list--${type}`}>{children}</ul>
  </div>
);

DoDontList.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['tick', 'cross']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

DoDontList.defaultProps = {
  className: '',
  style: {}
};

Do.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Do.defaultProps = {
  className: '',
  style: {}
};

Dont.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Dont.defaultProps = {
  className: '',
  style: {}
};

DoDontList.Do = Do;
DoDontList.Dont = Dont;

export default DoDontList;
