import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import { Container, Row } from '../layout';

const Title = ({ children, visuallyHiddenText, className, ...rest }) => (
  <h2
    className={classNames('nhsuk-global-alert__heading', className)}
    {...rest}
  >
    <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
    {children}
  </h2>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  visuallyHiddenText: PropTypes.string,
  className: PropTypes.string
};

Title.defaultProps = {
  visuallyHiddenText: 'Alert: ',
  className: ''
};

const Message = ({ children, className, ...rest }) => (
  <p className={classNames('nhsuk-global-alert__message', className)} {...rest}>
    {children}
  </p>
);

Message.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Message.defaultProps = {
  className: ''
};

const Link = ({ children, className, ...rest }) => (
  <a
    className={classNames(
      'nhsuk-u-nowrap',
      'nhsuk-global-alert-link__margin-override',
      className
    )}
    {...rest}
  >
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Link.defaultProps = {
  className: ''
};

const LastUpdated = ({ children, className, ...rest }) => (
  <p className={classNames('nhsuk-global-alert__updated', className)} {...rest}>
    {children}
  </p>
);

LastUpdated.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

LastUpdated.defaultProps = {
  className: ''
};

const EmergencyAlert = ({ children, className, ...rest }) => (
  <div className={classNames('nhsuk-global-alert', className)} {...rest}>
    <Container>
      <Row>
        <Row.Column size="full">
          <div className="nhsuk-global-alert__content">{children}</div>
        </Row.Column>
      </Row>
    </Container>
  </div>
);

EmergencyAlert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType,
  id: PropTypes.string
};

EmergencyAlert.defaultProps = {
  className: '',
  style: {},
  id: 'nhsuk-global-alert'
};

EmergencyAlert.Title = Title;
EmergencyAlert.Message = Message;
EmergencyAlert.Link = Link;
EmergencyAlert.LastUpdated = LastUpdated;

export default EmergencyAlert;
