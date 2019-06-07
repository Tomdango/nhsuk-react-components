import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CareCard = ({
  type,
  heading,
  children,
  disableHiddenText,
  className,
  hiddenText,
  ...rest
}) => {
  let componentHiddenText = hiddenText;
  if (componentHiddenText === '' && !disableHiddenText) {
    switch (type) {
      case 'non-urgent':
        componentHiddenText = 'Non-urgent advice: ';
        break;
      case 'urgent':
        componentHiddenText = 'Urgent advice: ';
        break;
      case 'immediate':
        componentHiddenText = 'Immediate action required: ';
        break;
      default:
        componentHiddenText = '';
    }
  }

  return (
    <div
      className={classNames(
        'nhsuk-care-card',
        `nhsuk-care-card--${type}`,
        className
      )}
      {...rest}
    >
      <div className="nhsuk-care-card__heading-container">
        <h3 className="nhsuk-care-card__heading">
          <span>
            {disableHiddenText ? null : (
              <span className="nhsuk-u-visually-hidden">
                {componentHiddenText}
              </span>
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
  disableHiddenText: PropTypes.bool,
  hiddenText: PropTypes.string,
  className: PropTypes.string
};

CareCard.defaultProps = {
  disableHiddenText: false,
  hiddenText: '',
  className: ''
};

export default CareCard;
