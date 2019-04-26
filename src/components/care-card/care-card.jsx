import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';

const CareCard = ({
  type,
  heading,
  children,
  style,
  disableHiddenText,
  className,
  hiddenText
}) => {
  let componentHiddenText = hiddenText;
  if (componentHiddenText === false) {
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
      style={style}
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
  hiddenText: PropTypes.oneOf([PropTypes.boolean, PropTypes.string]),
  className: PropTypes.string,
  style: stylePropType
};

CareCard.defaultProps = {
  disableHiddenText: false,
  hiddenText: false,
  className: '',
  style: {}
};

export default CareCard;
