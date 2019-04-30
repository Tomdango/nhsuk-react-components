import React from 'react';
import { storiesOf } from '@storybook/react';
import Fieldset from '../src/components/fieldset';

storiesOf('Fieldset', module)
  .add('Standard', () => (
    <Fieldset describedBy="Set of fields" title="What is your address?" />
  ))
  .add('With different sized header', () => (
    <React.Fragment>
      <Fieldset
        describedBy="Set of fields"
        title="Header Size s"
        titleSize="s"
      />
      <Fieldset
        describedBy="Set of fields"
        title="Header Size m"
        titleSize="m"
      />
      <Fieldset
        describedBy="Set of fields"
        title="Header Size l"
        titleSize="l"
      />
      <Fieldset
        describedBy="Set of fields"
        title="Header Size xl"
        titleSize="xl"
      />
    </React.Fragment>
  ));
