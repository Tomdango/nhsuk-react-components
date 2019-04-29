import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import { BackLink } from '../src';

const clickAction = action('clicked');

storiesOf('Back Link', module)
  .addDecorator(centered)
  .add('Back Link', () => <BackLink href="/go-back">Go Back</BackLink>)
  .add('Back Link with onClick attribute', () => (
    <BackLink
      onClick={e => {
        e.preventDefault();
        clickAction(e);
      }}
    >
      Go Back
    </BackLink>
  ));
