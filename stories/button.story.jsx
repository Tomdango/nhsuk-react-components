import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import '../node_modules/nhsuk-frontend/packages/core/all.scss';
import Button from '../src/components/button';

const clickAction = action('buttonClicked');

storiesOf('Button', module)
  .addDecorator(centered)
  .add('Primary button', () => <Button role="button">Save and Continue</Button>)
  .add('Secondary button', () => (
    <Button secondary role="button">
      Save and Continue
    </Button>
  ))
  .add('Reverse button', () => (
    <Button reverse role="button">
      Save and Continue
    </Button>
  ))
  .add('Disabled button', () => (
    <Button disabled role="button">
      Save and Continue
    </Button>
  ))
  .add('Button as a link', () => (
    <Button href="#" role="button">
      Save and Continue
    </Button>
  ))
  .add('Button with onClick', () => (
    <Button
      onClick={e => {
        e.preventDefault();
        clickAction(e);
      }}
      role="button"
    >
      Save and Continue
    </Button>
  ));
