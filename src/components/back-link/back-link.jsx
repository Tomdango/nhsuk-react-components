import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';
import { ChevronLeft } from '../icons';

const BackLink = ({ className, children, ...rest }) => (
  <div className={classNames('nhsuk-back-link', className)}>
    <a className="nhsuk-back-link__link" {...rest}>
      <ChevronLeft />
      {children}
    </a>
  </div>
);

BackLink.defaultProps = {
  children: '',
  className: '',
  style: {}
};

BackLink.propTypes = {
  children: node,
  className: string,
  style: stylePropType
};

export default BackLink;
