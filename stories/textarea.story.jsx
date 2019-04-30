import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Textarea from '../src/components/form/components/textarea';

storiesOf('Textarea', module)
  .addDecorator(centered)
  .add('Textarea', () => (
    <Textarea
      name="textarea-example"
      label="Can you provide more detail?"
      id="textarea"
      labelHtmlFor="textarea"
      hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
    />
  ))
  .add('Textarea with autocomplete attribute', () => (
    <Textarea
      name="textarea-example"
      label="Can you provide more detail?"
      id="textarea"
      labelHtmlFor="textarea"
      hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
      autoComplete="street-address"
    />
  ))
  .add('Textarea with error message', () => (
    <Textarea
      name="textarea-example"
      id="textarea"
      labelHtmlFor="textarea"
      label="Why can't you provide a National Insurance number?"
      error="You must provide an explanation"
    />
  ))
  .add('Textarea with placeholder', () => (
    <Textarea
      name="textarea-example"
      id="textarea"
      labelHtmlFor="textarea"
      label="Why can't you provide a National Insurance number?"
      placeholder="Placeholder"
    />
  ))
  .add('Textarea with defined rows', () => (
    <Textarea
      name="textarea-example"
      id="textarea"
      labelHtmlFor="textarea"
      label="Why can't you provide a National Insurance number?"
      placeholder="2 Rows"
      rows={2}
    />
  ));
