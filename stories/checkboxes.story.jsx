import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Form, Checkboxes } from '../src';

storiesOf('Checkboxes', module)
  .addDecorator(centered)
  .add('Checkboxes', () => (
    <Form>
      <Checkboxes
        name="test"
        describedBy="nationality-hint"
        title="What is your nationality?"
      >
        <Checkboxes.Box value="british">British</Checkboxes.Box>
        <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
        <Checkboxes.Box value="other">
          citizen of another country
        </Checkboxes.Box>
      </Checkboxes>
    </Form>
  ))
  .add('Checkboxes with hint text', () => (
    <Form>
      <Checkboxes name="test" title="How do you want to sign in?">
        <Checkboxes.Box
          value="gateway"
          hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
        >
          Sign in with Government Gateway
        </Checkboxes.Box>
        <Checkboxes.Box
          value="nhs-uk"
          hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
        >
          Sign in with NHS.UK login
        </Checkboxes.Box>
      </Checkboxes>
    </Form>
  ))
  .add('Checkboxes with disabled item', () => (
    <Form>
      <Checkboxes name="test" title="Colour">
        <Checkboxes.Box>Red</Checkboxes.Box>
        <Checkboxes.Box>Green</Checkboxes.Box>
        <Checkboxes.Box disabled>Blue</Checkboxes.Box>
      </Checkboxes>
    </Form>
  ))
  .add('Checkboxes with legend as page heading', () => (
    <Form>
      <Checkboxes
        name="waste"
        title="Which types of waste do you transport regularly?"
        hint="Select all that apply"
        asPageHeading
      >
        <Checkboxes.Box value="animal">
          Waste from animal carcasses
        </Checkboxes.Box>
        <Checkboxes.Box value="mines">
          Waste from mines or quarries
        </Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>
    </Form>
  ))
  .add('Checkboxes with error message', () => (
    <Form>
      <Checkboxes
        name="waste"
        title="Which types of waste do you transport regularly?"
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
    </Form>
  ));
