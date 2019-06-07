import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Title = ({ className, href, onClick, children, long, ...rest }) => (
  <div
    className={classNames(
      'nhsuk-header__transactional-service-name',
      {
        'nhsuk-header__transactional-service-name--long': long
      },
      className
    )}
    {...rest}
  >
    <a
      className="nhsuk-header__transactional-service-name--link"
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  </div>
);

Title.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  long: PropTypes.bool
};

Title.defaultProps = {
  className: '',
  href: '',
  onClick: () => {},
  long: false
};

export default Title;
