import React from 'react';
import { string, node, func } from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import { ChevronLeft } from '../icons';

const BackLink = ({ href, className, style, children, onClick }) => (
  <div className={classNames('nhsuk-back-link', className)} style={style}>
    <a className="nhsuk-back-link__link" href={href} onClick={onClick}>
      <ChevronLeft />
      {children}
    </a>
  </div>
);

BackLink.defaultProps = {
  href: '#',
  children: '',
  className: '',
  style: {},
  onClick: () => {}
};

BackLink.propTypes = {
  href: string,
  children: node,
  className: string,
  style: stylePropType,
  onClick: func
};

export default BackLink;
