import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorMessage } from '../src';

storiesOf('Error Message', module).add('Standard', () => (
  <ErrorMessage
    titleText="This is a problem"
    descriptionText="Optional description of the errors and how to correct them"
  >
    Error message about full name goes here
  </ErrorMessage>
));
