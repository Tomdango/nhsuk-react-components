import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Form, Textarea } from '../src';

storiesOf('Textarea', module)
  .addDecorator(centered)
  .add('Textarea', () => (
    <Form>
      <Textarea
        name="textarea-example"
        title="Can you provide more detail?"
        hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
      />
    </Form>
  ))
  .add('Textarea with autocomplete attribute', () => (
    <Form>
      <Textarea
        name="textarea-example"
        title="Can you provide more detail?"
        hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
        autoComplete="street-address"
      />
    </Form>
  ))
  .add('Textarea with error message', () => (
    <Form>
      <Textarea
        name="textarea-example"
        title="Why can't you provide a National Insurance number?"
        error="You must provide an explanation"
      />
    </Form>
  ));
