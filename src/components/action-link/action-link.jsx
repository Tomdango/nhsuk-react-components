import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import { ArrowRightCircle } from '../icons';

const ActionLink = ({
  children,
  href,
  openInNewWindow,
  onClick,
  className,
  style
}) => {
  return (
    <div className={classNames('nhsuk-action-link', className)} style={style}>
      <a
        className="nhsuk-action-link__link"
        target={openInNewWindow ? '_blank' : ''}
        onClick={onClick}
        rel={openInNewWindow ? 'noreferrer noopener' : ''}
        href={href}
      >
        <ArrowRightCircle />
        <span className="nhsuk-action-link__text">{children}</span>
      </a>
    </div>
  );
};

ActionLink.defaultProps = {
  href: '#',
  openInNewWindow: false,
  className: '',
  onClick: () => {},
  style: {}
};

ActionLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  className: PropTypes.string,
  href: PropTypes.string,
  openInNewWindow: PropTypes.bool,
  style: stylePropType
};

export default ActionLink;
