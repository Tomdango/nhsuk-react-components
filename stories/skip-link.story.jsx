import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { SkipLink } from '../src';

storiesOf('Skip Link', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <React.Fragment>
      <SkipLink />
      To view the skip link component, press tab or navigate to the next
      element.
    </React.Fragment>
  ));
