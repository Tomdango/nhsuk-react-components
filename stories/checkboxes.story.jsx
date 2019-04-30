import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Fieldset from '../src/components/fieldset';
import Checkboxes from '../src/components/form/components/checkboxes';

storiesOf('Checkboxes', module)
  .addDecorator(centered)
  .add('Checkboxes', () => (
    <Checkboxes
      name="test"
      describedBy="nationality-hint"
      id="id"
      label="What is your nationality?"
      labelHtmlFor="id"
    >
      <Checkboxes.Box value="british">British</Checkboxes.Box>
      <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
      <Checkboxes.Box value="other">citizen of another country</Checkboxes.Box>
    </Checkboxes>
  ))
  .add('Checkboxes with hint text', () => (
    <Checkboxes
      name="test"
      label="How do you want to sign in?"
      hint="Login hint"
    >
      <Checkboxes.Box value="gateway">
        Sign in with Government Gateway
      </Checkboxes.Box>
      <Checkboxes.Box value="nhs-uk">Sign in with NHS.UK login</Checkboxes.Box>
    </Checkboxes>
  ))
  .add('Checkboxes with hint text on boxes', () => (
    <Checkboxes name="test" label="How do you want to sign in?">
      <Checkboxes.Box
        value="gateway"
        hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
      >
        Sign in with Government Gateway
      </Checkboxes.Box>
      <Checkboxes.Box
        value="nhs-uk"
        hint="You’ll have an account if you’ve already proved your identity with the Post Office, Royal Mail or SecureIdentity."
      >
        Sign in with NHS.UK login
      </Checkboxes.Box>
    </Checkboxes>
  ))
  .add('Checkboxes with disabled item', () => (
    <Checkboxes name="test" label="Colour">
      <Checkboxes.Box>Red</Checkboxes.Box>
      <Checkboxes.Box>Green</Checkboxes.Box>
      <Checkboxes.Box disabled>Blue</Checkboxes.Box>
    </Checkboxes>
  ))
  .add('Checkboxes with legend as page heading', () => (
    <Fieldset
      title="Which types of waste do you transport regularly?"
      titleSize="l"
    >
      <Checkboxes name="waste" hint="Select all that apply">
        <Checkboxes.Box value="animal">
          Waste from animal carcasses
        </Checkboxes.Box>
        <Checkboxes.Box value="mines">
          Waste from mines or quarries
        </Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  ))
  .add('Checkboxes with error message', () => (
    <Checkboxes
      name="waste"
      label="Which types of waste do you transport regularly?"
      error="Please select an option"
    >
      <Checkboxes.Box value="animal">
        Waste from animal carcasses
      </Checkboxes.Box>
      <Checkboxes.Box value="mines">
        Waste from mines or quarries
      </Checkboxes.Box>
      <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
    </Checkboxes>
  ));
