import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { BackLink } from '../src';

storiesOf('Back Link', module)
  .addDecorator(centered)
  .add('Standard', () => <BackLink href="/go-back">Go Back</BackLink>);
