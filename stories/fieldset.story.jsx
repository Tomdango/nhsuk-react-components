import React from 'react';
import { storiesOf } from '@storybook/react';
import { Fieldset } from '../src';

storiesOf('Fieldset', module)
  .add('Standard', () => (
    <Fieldset describedBy="Set of fields" title="What is your address?" />
  ))
  .add('As Page Header', () => (
    <Fieldset
      asPageHeading
      describedBy="Set of fields"
      title="What is your address?"
    />
  ));

// TODO: With fields
