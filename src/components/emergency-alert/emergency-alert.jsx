import React from 'react';
import PropTypes from 'prop-types';
// import './_emergency-alert.scss';

const Title = ({ children }) => (
  <h2 className="nhsuk-global-alert__heading">
    <span className="nhsuk-u-visually-hidden">Alert: </span>
    {children}
  </h2>
);

const Message = ({ children }) => (
  <p className="nhsuk-global-alert__message">{children}</p>
);

const Link = ({ href, children }) => (
  <a
    className="nhsuk-u-nowrap nhsuk-global-alert-link__margin-override"
    href={href}
  >
    {children}
  </a>
);

const LastUpdated = ({ children }) => (
  <p className="nhsuk-global-alert__updated">{children}</p>
);

const EmergencyAlert = ({ children }) => {
  return (
    <div className="nhsuk-global-alert" id="nhsuk-global-alert">
      <div className="nhsuk-width-container">
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-full">
            <div className="nhsuk-global-alert__content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

EmergencyAlert.propTypes = {
  children: PropTypes.node.isRequired
};

Title.propTypes = {
  children: PropTypes.node.isRequired
};

Message.propTypes = {
  children: PropTypes.node.isRequired
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

LastUpdated.propTypes = {
  children: PropTypes.node.isRequired
};

EmergencyAlert.Title = Title;
EmergencyAlert.Message = Message;
EmergencyAlert.Link = Link;
EmergencyAlert.LastUpdated = LastUpdated;

export default EmergencyAlert;
