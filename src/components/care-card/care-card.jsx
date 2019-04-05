import React from 'react';
import PropTypes from 'prop-types';
// import './_care-card.scss';

const CareCard = props => {
  const { type, heading, children, disableHiddenText } = props;
  let hiddenText;
  // Default
  switch (type) {
    case 'non-urgent':
      hiddenText = 'Non-urgent advice: ';
      break;
    case 'urgent':
      hiddenText = 'Urgent advice: ';
      break;
    case 'immediate':
      hiddenText = 'Immediate action required: ';
      break;
    default:
      hiddenText = '';
  }
  return (
    <div className={`nhsuk-care-card nhsuk-care-card--${type}`}>
      <div className="nhsuk-care-card__heading-container">
        <h3 className="nhsuk-care-card__heading">
          <span>
            {disableHiddenText ? null : (
              <span className="nhsuk-u-visually-hidden">{hiddenText}</span>
            )}
            {heading}
          </span>
        </h3>
        <span className="nhsuk-care-card__arrow" aria-hidden="true" />
      </div>
      <div className="nhsuk-care-card__content">{children}</div>
    </div>
  );
};

CareCard.propTypes = {
  type: PropTypes.oneOf(['non-urgent', 'urgent', 'immediate']).isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disableHiddenText: PropTypes.bool
};

CareCard.defaultProps = {
  disableHiddenText: false
};

export default CareCard;
