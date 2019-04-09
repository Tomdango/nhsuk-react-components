import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { BackLink } from '../src';

storiesOf('Back Link', module)
  .addDecorator(centered)
  .add('Back Link', () => <BackLink href="/go-back">Go Back</BackLink>)
  .add('Back Link with onClick attribute', () => (
    <BackLink
      onClick={e => {
        e.preventDefault();
        // eslint-disable-next-line no-alert
        window.alert('Clicked!');
      }}
    >
      Go Back
    </BackLink>
  ));
