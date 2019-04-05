import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import {
  Form,
  Checkboxes,
  DateInput,
  Input,
  Radios,
  Select,
  Textarea
} from '../src';

storiesOf('Form Elements', module)
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
  .add('Date Input', () => (
    <Form>
      <DateInput
        name="dateofbirth"
        describedBy="dob-hint"
        title="What is your date of birth?"
        autoFocus
      />
    </Form>
  ))
  .add('Input', () => (
    <Form>
      <Input
        name="ni-number"
        describedBy="national-insurance-hint"
        title="National Insurance Number"
      />
    </Form>
  ))
  .add('Input with autocomplete attribute', () => (
    <Form>
      <Input
        name="postcode"
        describedBy="postcode-input"
        title="Postcode"
        autocomplete="postal-code"
      />
    </Form>
  ))
  .add('Input with hint text', () => (
    <Form>
      <Input
        name="ni-number-input"
        describedBy="ni-number-input"
        title="National Insurance Number"
        autocomplete="postal-code"
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      />
    </Form>
  ))
  .add('Input with error', () => (
    <Form>
      <Input
        name="ni-number-input"
        describedBy="ni-number-input"
        title="National Insurance Number"
        autocomplete="postal-code"
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
        error="Error message goes here"
      />
    </Form>
  ))
  .add('Input with width modifier', () => (
    <Form>
      <Input
        name="ni-number-input"
        describedBy="ni-number-input"
        title="National Insurance Number"
        autocomplete="postal-code"
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
        width={10}
      />
    </Form>
  ))
  .add('Radios', () => (
    <Form>
      <Radios
        name="radios-example"
        title="Have you changed your name?"
        hint="This includes changing your last name or spelling your name differently."
      >
        <Radios.Radio value="yes">Yes</Radios.Radio>
        <Radios.Radio value="no">No</Radios.Radio>
      </Radios>
    </Form>
  ))
  .add('Radios inline', () => (
    <Form>
      <Radios
        name="radios-example"
        title="Have you changed your name?"
        hint="This includes changing your last name or spelling your name differently."
        inline
      >
        <Radios.Radio value="yes">Yes</Radios.Radio>
        <Radios.Radio value="no">No</Radios.Radio>
      </Radios>
    </Form>
  ))
  .add('Radios disabled', () => (
    <Form>
      <Radios
        name="radios-example"
        title="Have you changed your name?"
        hint="This includes changing your last name or spelling your name differently."
      >
        <Radios.Radio value="yes" disabled>
          Yes
        </Radios.Radio>
        <Radios.Radio value="no" disabled>
          No
        </Radios.Radio>
      </Radios>
    </Form>
  ))
  .add('Radios with a divider', () => (
    <Form>
      <Radios name="radios-example" title="How do you want to sign in?">
        <Radios.Radio value="government-gateway">
          Use Government Gateway
        </Radios.Radio>
        <Radios.Radio value="nhsuk-login">Use NHS.UK login</Radios.Radio>
        <Radios.Divider>or</Radios.Divider>
        <Radios.Radio value="create-account">Create an account</Radios.Radio>
      </Radios>
    </Form>
  ))
  .add('Radios with hint text on items', () => (
    <Form>
      <Radios name="radios-example" title="How do you want to sign in?">
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
    </Form>
  ))
  .add('Radios with hint text and error message', () => (
    <Form>
      <Radios
        error="Please select an option"
        name="radios-example"
        title="How do you want to sign in?"
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
    </Form>
  ))
  .add('Select', () => (
    <Form>
      <Select name="select" title="Label text goes here">
        <Select.Item value={1}>NHS.UK frontend option 1</Select.Item>
        <Select.Item value={2} selected>
          NHS.UK frontend option 2
        </Select.Item>
        <Select.Item value={3} disabled>
          NHS.UK frontend option 3
        </Select.Item>
      </Select>
    </Form>
  ))
  .add('Select with hint text and error message', () => (
    <Form>
      <Select
        hint="Hint text goes here"
        name="select"
        title="Label text goes here"
        error="Error message goes here"
      >
        <Select.Item value={1}>NHS.UK frontend option 1</Select.Item>
        <Select.Item value={2} selected>
          NHS.UK frontend option 2
        </Select.Item>
        <Select.Item value={3} disabled>
          NHS.UK frontend option 3
        </Select.Item>
      </Select>
    </Form>
  ))
  .add('Textarea', () => (
    <Form>
      <Textarea
        name="textarea-example"
        title="Can you provide more detail?"
        hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
      />
    </Form>
  ))
  .add('Textarea with autocomplete attribute', () => (
    <Form>
      <Textarea
        name="textarea-example"
        title="Can you provide more detail?"
        hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
        autoComplete="street-address"
      />
    </Form>
  ))
  .add('Textarea with error message', () => (
    <Form>
      <Textarea
        name="textarea-example"
        title="Why can't you provide a National Insurance number?"
        error="You must provide an explanation"
      />
    </Form>
  ));
