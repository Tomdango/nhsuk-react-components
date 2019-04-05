import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Label } from '../src';

storiesOf('Label', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <Label htmlForId="input-id">National Insurance number</Label>
  ))
  .add('Bold', () => (
    <Label htmlForId="input-id" type="bold">
      National Insurance number
    </Label>
  ))
  .add('Heading', () => (
    <Label htmlForId="input-id" type="heading">
      National Insurance number
    </Label>
  ));
