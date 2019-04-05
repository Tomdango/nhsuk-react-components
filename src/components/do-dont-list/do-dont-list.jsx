import React from 'react';
import PropTypes from 'prop-types';
// import './_do-dont-list.scss';

const Do = ({ children }) => (
  <li>
    <svg
      className="nhsuk-icon nhsuk-icon__tick"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        strokeWidth="4"
        strokeLinecap="round"
        d="M18.4 7.8l-8.5 8.4L5.6 12"
      />
    </svg>
    {children}
  </li>
);

const Dont = ({ children }) => (
  <li>
    <svg
      className="nhsuk-icon nhsuk-icon__cross"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" />
      <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" />
    </svg>
    {children}
  </li>
);

const DoDontList = ({ title, type, children }) => (
  <div className="nhsuk-do-dont-list">
    <h3 className="nhsuk-do-dont-list__label">{title}</h3>
    <ul className={`nhsuk-list nhsuk-list--${type}`}>{children}</ul>
  </div>
);

DoDontList.Do = Do;
DoDontList.Dont = Dont;

DoDontList.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['tick', 'cross']).isRequired,
  children: PropTypes.node.isRequired
};

Do.propTypes = {
  children: PropTypes.node.isRequired
};

Dont.propTypes = {
  children: PropTypes.node.isRequired
};

export default DoDontList;
