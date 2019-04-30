import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Input from '../src/components/form/components/input';

storiesOf('Input', module)
  .addDecorator(centered)
  .add('Input', () => (
    <Input name="ni-number" label="National Insurance Number" />
  ))
  .add('Input with autocomplete attribute', () => (
    <Input name="postcode" label="Postcode" autoComplete="postal-code" />
  ))
  .add('Input with placeholder', () => (
    <Input
      name="postcode"
      describedBy="postcode-input"
      label="Postcode"
      placeholder="Postcode"
      autocomplete="postal-code"
    />
  ))
  .add('Input with hint text', () => (
    <Input
      name="ni-number-input"
      label="National Insurance Number"
      autoComplete="postal-code"
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    />
  ))
  .add('Input with error', () => (
    <Input
      name="ni-number-input"
      label="National Insurance Number"
      autoComplete="postal-code"
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      error="Error message goes here"
    />
  ))
  .add('Input with width modifier', () => (
    <Input
      name="ni-number-input"
      label="National Insurance Number"
      autoComplete="postal-code"
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      width={10}
    />
  ));
