import React from 'react';
import PropTypes from 'prop-types';

const ReviewDate = ({
  lastReviewText,
  nextReviewText,
  lastReviewDate,
  nextReviewDate
}) => (
  <div className="nhsuk-review-date">
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
  nextReviewDate: PropTypes.string
};

ReviewDate.defaultProps = {
  lastReviewText: 'Page last reviewed:',
  nextReviewText: 'Next review due:',
  lastReviewDate: '',
  nextReviewDate: ''
};

export default ReviewDate;
