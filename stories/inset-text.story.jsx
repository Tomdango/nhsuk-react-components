import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { InsetText } from '../src';

storiesOf('Inset Text', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <InsetText>
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
  ));
