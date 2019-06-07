import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';
import { ArrowRightCircle } from '../icons';

const ActionLink = ({ children, className, style, ...rest }) => (
  <div className={classNames('nhsuk-action-link', className)} style={style}>
    <a className="nhsuk-action-link__link" {...rest}>
      <ArrowRightCircle />
      <span className="nhsuk-action-link__text">{children}</span>
    </a>
  </div>
);

ActionLink.defaultProps = {
  className: '',
  style: {}
};

ActionLink.propTypes = {
  children: PropTypes.PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

export default ActionLink;
