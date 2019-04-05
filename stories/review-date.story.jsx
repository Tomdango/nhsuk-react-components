import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ReviewDate } from '../src';

storiesOf('Review Date', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <ReviewDate lastReview="12 February 2016" nextReview="1 February 2019" />
  ))
  .add('Last Reviewed Only', () => <ReviewDate lastReview="12 February 2016" />)
  .add('Next Review Only', () => <ReviewDate nextReview="1 February 2019" />);
