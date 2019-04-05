import React from 'react';
// import './_review-date.scss';

const ReviewDate = ({ lastReview, nextReview }) => (
  <div className="nhsuk-review-date">
    <p className="nhsuk-body-s">
      {lastReview ? `Page last reviewed: ${lastReview}` : null}
      {lastReview && nextReview ? <br /> : null}
      {nextReview ? `Next review due: ${nextReview}` : null}
    </p>
  </div>
);

export default ReviewDate;
