import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Select from '../src/components/form/components/select';

storiesOf('Select', module)
  .addDecorator(centered)
  .add('Select', () => (
    <Select
      name="select"
      id="select"
      labelHtmlFor="select"
      label="Label text goes here"
    >
      <Select.Item value={1}>NHS.UK frontend option 1</Select.Item>
      <Select.Item value={2} selected>
        NHS.UK frontend option 2
      </Select.Item>
      <Select.Item value={3} disabled>
        NHS.UK frontend option 3
      </Select.Item>
    </Select>
  ))
  .add('Select with hint text and error message', () => (
    <Select
      hint="Hint text goes here"
      name="select"
      id="select"
      label="Label text goes here"
      labelHtmlFor="select"
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
  ));
