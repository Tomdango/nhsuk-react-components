import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tick, Cross } from '../icons';

const Do = ({ children, ...rest }) => (
  <li {...rest}>
    <Tick />
    {children}
  </li>
);

const Dont = ({ children, ...rest }) => (
  <li {...rest}>
    <Cross />
    {children}
  </li>
);

const DoDontList = ({ title, type, children, className, ...rest }) => (
  <div className={classNames('nhsuk-do-dont-list', className)} {...rest}>
    <h3 className="nhsuk-do-dont-list__label">{title}</h3>
    <ul className={`nhsuk-list nhsuk-list--${type}`}>{children}</ul>
  </div>
);

DoDontList.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['tick', 'cross']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

DoDontList.defaultProps = {
  className: ''
};

Do.propTypes = {
  children: PropTypes.node.isRequired
};

Dont.propTypes = {
  children: PropTypes.node.isRequired
};

DoDontList.Do = Do;
DoDontList.Dont = Dont;

export default DoDontList;
