import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ErrorMessage from '../src/components/error-message';

storiesOf('Error Message', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <ErrorMessage>Error message about full name goes here</ErrorMessage>
  ))
  .add('With custom visuallyHiddenText', () => (
    <ErrorMessage visuallyHiddenText="Invalid Input: ">
      Please complete the following field.
    </ErrorMessage>
  ));
