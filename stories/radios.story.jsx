import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Radios from '../src/components/form/components/radios';

storiesOf('Radios', module)
  .addDecorator(centered)
  .add('Radios', () => (
    <Radios
      name="radios-example"
      label="Have you changed your name?"
      hint="This includes changing your last name or spelling your name differently."
      id="radios-example"
      labelHtmlFor="radios-example"
    >
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
  ))
  .add('Radios inline', () => (
    <Radios
      name="radios-example"
      label="Have you changed your name?"
      hint="This includes changing your last name or spelling your name differently."
      id="radios-example"
      labelHtmlFor="radios-example"
      inline
    >
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
  ))
  .add('Radios disabled', () => (
    <Radios
      name="radios-example"
      label="Have you changed your name?"
      id="radios-example"
      labelHtmlFor="radios-example"
      hint="This includes changing your last name or spelling your name differently."
    >
      <Radios.Radio value="yes" disabled>
        Yes
      </Radios.Radio>
      <Radios.Radio value="no" disabled>
        No
      </Radios.Radio>
    </Radios>
  ))
  .add('Radios with a divider', () => (
    <Radios name="radios-example" label="How do you want to sign in?">
      <Radios.Radio value="government-gateway">
        Use Government Gateway
      </Radios.Radio>
      <Radios.Radio value="nhsuk-login">Use NHS.UK login</Radios.Radio>
      <Radios.Divider>or</Radios.Divider>
      <Radios.Radio value="create-account">Create an account</Radios.Radio>
    </Radios>
  ))
  .add('Radios with hint text on items', () => (
    <Radios name="radios-example" label="How do you want to sign in?">
      <Radios.Radio
        hint="You'll have a user ID if you've registered for self-assessment or filed a tax return online before."
        value="government-gateway"
      >
        Use Government Gateway
      </Radios.Radio>
      <Radios.Radio
        hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
        value="nhsuk-login"
      >
        Use NHS.UK login
      </Radios.Radio>
    </Radios>
  ))
  .add('Radios with hint text and error message', () => (
    <Radios
      error="Please select an option"
      name="radios-example"
      label="How do you want to sign in?"
    >
      <Radios.Radio
        hint="You'll have a user ID if you've registered for self-assessment or filed a tax return online before."
        value="government-gateway"
      >
        Use Government Gateway
      </Radios.Radio>
      <Radios.Radio
        hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
        value="nhsuk-login"
      >
        Use NHS.UK login
      </Radios.Radio>
    </Radios>
  ));
