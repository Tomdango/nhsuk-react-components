import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';

const ReviewDate = ({
  lastReviewText,
  nextReviewText,
  lastReviewDate,
  nextReviewDate,
  className,
  style
}) => (
  <div className={classNames('nhsuk-review-date', className)} style={style}>
    <p className="nhsuk-body-s">
      {lastReviewDate ? `${lastReviewText} ${lastReviewDate}` : null}
      {lastReviewDate && nextReviewDate ? <br /> : null}
      {nextReviewDate ? `${nextReviewText} ${nextReviewDate}` : null}
    </p>
  </div>
);

ReviewDate.propTypes = {
  lastReviewText: PropTypes.string,
  nextReviewText: PropTypes.string,
  lastReviewDate: PropTypes.string,
  nextReviewDate: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

ReviewDate.defaultProps = {
  lastReviewText: 'Page last reviewed:',
  nextReviewText: 'Next review due:',
  lastReviewDate: '',
  nextReviewDate: '',
  className: '',
  style: {}
};

export default ReviewDate;
