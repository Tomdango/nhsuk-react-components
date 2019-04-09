import React from 'react';
import { string, node, oneOfType, func, bool } from 'prop-types';
import stylePropType from 'react-style-proptype';
import { ChevronLeft } from '../icons';

const BackLink = props => {
  const { href, className, style, children, onClick } = props;
  return (
    <div className={`nhsuk-back-link ${className}`} style={style}>
      <a className="nhsuk-back-link__link" href={href} onClick={onClick}>
        <ChevronLeft />
        {children}
      </a>
    </div>
  );
};

BackLink.defaultProps = {
  href: '#',
  children: '',
  className: '',
  style: {},
  onClick: false
};

BackLink.propTypes = {
  href: string,
  children: node,
  className: string,
  style: stylePropType,
  onClick: oneOfType([bool, func])
};

export default BackLink;
