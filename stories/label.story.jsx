import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Label from '../src/components/label';

storiesOf('Label', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <Label htmlFor="input-id">National Insurance number</Label>
  ))
  .add('Bold', () => (
    <Label htmlFor="input-id" type="bold">
      National Insurance number
    </Label>
  ))
  .add('Heading', () => (
    <Label htmlFor="input-id" type="heading">
      National Insurance number
    </Label>
  ));
