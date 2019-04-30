import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import InsetText from '../src/components/inset-text';

storiesOf('Inset Text', module)
  .addDecorator(centered)
  .add('Standard', () => (
    <InsetText visuallyHiddenText="Information: ">
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
  ));
