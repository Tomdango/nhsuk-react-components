import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import ErrorSummary from '../src/components/error-summary';

const clicked = action('errorItemClicked');

storiesOf('Error Summary', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <ErrorSummary
      role="alert"
      title="This is a problem"
      description="Optional description of the errors and how to correct them"
    >
      <ErrorSummary.Item href="#example-error-1">
        Link to error with explanation
      </ErrorSummary.Item>
      <ErrorSummary.Item href="#example-error-2">
        Link to error with explanation
      </ErrorSummary.Item>
    </ErrorSummary>
  ))
  .add('With onClick', () => (
    <ErrorSummary
      role="alert"
      title="This is a problem"
      description="Optional description of the errors and how to correct them"
    >
      <ErrorSummary.Item
        onClick={e => {
          e.preventDefault();
          clicked(e);
        }}
      >
        Link to error with explanation
      </ErrorSummary.Item>
      <ErrorSummary.Item
        onClick={e => {
          e.preventDefault();
          clicked(e);
        }}
      >
        Link to error with explanation
      </ErrorSummary.Item>
    </ErrorSummary>
  ));
