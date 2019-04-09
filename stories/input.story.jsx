import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Form, Input } from '../src';

storiesOf('Input', module)
  .addDecorator(centered)
  .add('Input', () => (
    <Form>
      <Input
        name="ni-number"
        describedBy="national-insurance-hint"
        title="National Insurance Number"
      />
    </Form>
  ))
  .add('Input with autocomplete attribute', () => (
    <Form>
      <Input
        name="postcode"
        describedBy="postcode-input"
        title="Postcode"
        autocomplete="postal-code"
      />
    </Form>
  ))
  .add('Input with hint text', () => (
    <Form>
      <Input
        name="ni-number-input"
        describedBy="ni-number-input"
        title="National Insurance Number"
        autocomplete="postal-code"
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      />
    </Form>
  ))
  .add('Input with error', () => (
    <Form>
      <Input
        name="ni-number-input"
        describedBy="ni-number-input"
        title="National Insurance Number"
        autocomplete="postal-code"
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
        error="Error message goes here"
      />
    </Form>
  ))
  .add('Input with width modifier', () => (
    <Form>
      <Input
        name="ni-number-input"
        describedBy="ni-number-input"
        title="National Insurance Number"
        autocomplete="postal-code"
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
        width={10}
      />
    </Form>
  ));
