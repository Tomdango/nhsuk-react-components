import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { WarningCallout } from '../src';

storiesOf('Warning Callout', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <WarningCallout heading="School, nursery or work">
      <p>
        Stay away from school, nursery or work until all the spots have crusted
        over. This is usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ));
