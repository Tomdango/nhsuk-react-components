import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { Container, Row } from '../layout';

const Title = ({ children, visuallyHiddenText, className, style }) => (
  <h2 className={`nhsuk-global-alert__heading ${className}`} style={style}>
    <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
    {children}
  </h2>
);

const Message = ({ children, className, style }) => (
  <p className={`nhsuk-global-alert__message ${className}`} style={style}>
    {children}
  </p>
);

const Link = ({ href, children, className, style }) => (
  <a
    className={`nhsuk-u-nowrap nhsuk-global-alert-link__margin-override ${className}`}
    style={style}
    href={href}
  >
    {children}
  </a>
);

const LastUpdated = ({ children, className, style }) => (
  <p className={`nhsuk-global-alert__updated ${className}`} style={style}>
    {children}
  </p>
);

const EmergencyAlert = ({ children, className, style, id }) => {
  return (
    <div className={`nhsuk-global-alert ${className}`} style={style} id={id}>
      <Container>
        <Row>
          <Row.Column size="full">
            <div className="nhsuk-global-alert__content">{children}</div>
          </Row.Column>
        </Row>
      </Container>
    </div>
  );
};

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

Title.propTypes = {
  children: PropTypes.node.isRequired,
  visuallyHiddenText: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

Title.defaultProps = {
  visuallyHiddenText: 'Alert: ',
  className: '',
  style: {}
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Message.defaultProps = {
  className: '',
  style: {}
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Link.defaultProps = {
  className: '',
  style: {}
};

LastUpdated.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

LastUpdated.defaultProps = {
  className: '',
  style: {}
};

EmergencyAlert.Title = Title;
EmergencyAlert.Message = Message;
EmergencyAlert.Link = Link;
EmergencyAlert.LastUpdated = LastUpdated;

export default EmergencyAlert;
