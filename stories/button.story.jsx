import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { boolean } from '@storybook/addon-knobs';
import '../node_modules/nhsuk-frontend/packages/core/all.scss';
import { Button } from '../src';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <Button
      secondary={boolean('Secondary', false)}
      reverse={boolean('Reverse', false)}
    >
      Save and Continue
    </Button>
  ))
  .add('Button as a link', () => (
    <Button
      href="#"
      secondary={boolean('Secondary', false)}
      reverse={boolean('Reverse', false)}
    >
      Save and Continue
    </Button>
  ));
