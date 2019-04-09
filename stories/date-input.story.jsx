import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Form, DateInput } from '../src';

storiesOf('Date Input', module)
  .addDecorator(centered)
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
  .add('Date Input as Individual Elements', () => (
    <Form>
      <DateInput
        name="dateofbirth"
        describedBy="dateofbirth-hint"
        title="What is your date of birth?"
        autoFocus
      >
        <DateInput.Month />
        <DateInput.Year />
      </DateInput>
    </Form>
  ))
  .add('Date Input as with autocomplete', () => (
    <Form>
      <DateInput
        name="dateofbirth"
        describedBy="dateofbirth-hint"
        title="What is your date of birth?"
        autoFocus
      >
        <DateInput.Day autoComplete="bday-day" />
        <DateInput.Month autoComplete="bday-month" />
        <DateInput.Year autoComplete="bday-year" />
      </DateInput>
    </Form>
  ))
  .add('Date Input as with errors', () => (
    <Form>
      <DateInput
        name="dateofbirth"
        describedBy="dateofbirth-hint"
        title="What is your date of birth?"
        hint="For example, 31 3 1980"
        error="Error message goes here"
        autoFocus
      />
    </Form>
  ))
  .add('Date Input as with error on single input', () => (
    <Form>
      <DateInput
        name="dateofbirth"
        describedBy="dateofbirth-hint"
        title="What is your date of birth?"
        hint="For example, 31 3 1980"
        error="Error message goes here"
        autoFocus
      >
        <DateInput.Day autoComplete="bday-day" error />
        <DateInput.Month autoComplete="bday-month" />
        <DateInput.Year autoComplete="bday-year" />
      </DateInput>
    </Form>
  ));
