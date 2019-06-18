import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import stylePropType from 'react-style-proptype';

const Title = ({ className, children, long, style, ...rest }) => (
  <div
    className={classNames(
      'nhsuk-header__transactional-service-name',
      {
        'nhsuk-header__transactional-service-name--long': long
      },
      className
    )}
    style={style}
  >
    <a className="nhsuk-header__transactional-service-name--link" {...rest}>
      {children}
    </a>
  </div>
);

Title.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  long: PropTypes.bool,
  style: stylePropType
};

Title.defaultProps = {
  className: '',
  href: '',
  onClick: () => {},
  long: false,
  style: {}
};

export default Title;
