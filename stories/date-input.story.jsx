import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import DateInput from '../src/components/form/components/date-input';

storiesOf('Date Input', module)
  .addDecorator(centered)
  .add('Date Input', () => (
    <DateInput
      name="dateofbirth"
      describedBy="dob-hint"
      label="What is your date of birth?"
      autoFocus
    />
  ))
  .add('Date Input as Individual Elements', () => (
    <DateInput
      name="dateofbirth"
      describedBy="dateofbirth-hint"
      label="What is your date of birth?"
      autoFocus
    >
      <DateInput.Month />
      <DateInput.Year />
    </DateInput>
  ))
  .add('Date Input as with autocomplete', () => (
    <DateInput
      name="dateofbirth"
      describedBy="dateofbirth-hint"
      label="What is your date of birth?"
      autoFocus
    >
      <DateInput.Day autoComplete="bday-day" />
      <DateInput.Month autoComplete="bday-month" />
      <DateInput.Year autoComplete="bday-year" />
    </DateInput>
  ))
  .add('Date Input as with errors', () => (
    <DateInput
      name="dateofbirth"
      describedBy="dateofbirth-hint"
      label="What is your date of birth?"
      hint="For example, 31 3 1980"
      error="Error message goes here"
      autoFocus
    />
  ))
  .add('Date Input as with error on single input', () => (
    <DateInput
      name="dateofbirth"
      describedBy="dateofbirth-hint"
      label="What is your date of birth?"
      hint="For example, 31 3 1980"
      autoFocus
    >
      <DateInput.Day autoComplete="bday-day" error />
      <DateInput.Month autoComplete="bday-month" />
      <DateInput.Year autoComplete="bday-year" />
    </DateInput>
  ));
