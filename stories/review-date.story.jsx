import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ReviewDate from '../src/components/review-date';

storiesOf('Review Date', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <ReviewDate
      lastReviewDate="12 February 2016"
      nextReviewDate="1 February 2019"
    />
  ))
  .add('Last Reviewed Only', () => (
    <ReviewDate
      lastReviewText="Last Reviewed: "
      lastReviewDate="12 February 2016"
    />
  ))
  .add('Next Review Only', () => (
    <ReviewDate nextReviewDate="1 February 2019" />
  ));
