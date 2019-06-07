import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ReviewDate = ({
  lastReviewText,
  nextReviewText,
  lastReviewDate,
  nextReviewDate,
  className,
  ...rest
}) => (
  <div className={classNames('nhsuk-review-date', className)} {...rest}>
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
  className: PropTypes.string
};

ReviewDate.defaultProps = {
  lastReviewText: 'Page last reviewed:',
  nextReviewText: 'Next review due:',
  lastReviewDate: '',
  nextReviewDate: '',
  className: ''
};

export default ReviewDate;
