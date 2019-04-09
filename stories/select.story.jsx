import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Form, Select } from '../src';

storiesOf('Select', module)
  .addDecorator(centered)
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
  ));
