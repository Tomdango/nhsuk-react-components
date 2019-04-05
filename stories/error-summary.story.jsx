import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorSummary } from '../src';

storiesOf('Error Summary', module).add('Standard', () => (
  <ErrorSummary
    title="This is a problem"
    description="Optional description of the errors and how to correct them"
  >
    <ErrorSummary.ErrorItem href="#example-error-1">
      Link to error with explanation
    </ErrorSummary.ErrorItem>
    <ErrorSummary.ErrorItem href="#example-error-2">
      Link to error with explanation
    </ErrorSummary.ErrorItem>
  </ErrorSummary>
));
