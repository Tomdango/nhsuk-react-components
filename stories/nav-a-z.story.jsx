import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { NavAZ } from '../src';

const items = [
  {
    label: 'A'
  },
  {
    disable: 'true',
    label: 'B'
  },
  {
    label: 'C'
  },
  {
    label: 'D'
  },
  {
    label: 'E'
  },
  {
    label: 'F'
  },
  {
    label: 'G'
  },
  {
    label: 'H'
  },
  {
    label: 'I'
  },
  {
    label: 'J'
  },
  {
    label: 'K'
  },
  {
    label: 'L'
  },
  {
    label: 'M'
  },
  {
    label: 'N'
  },
  {
    label: 'O'
  },
  {
    label: 'P'
  },
  {
    label: 'Q'
  },
  {
    label: 'R'
  },
  {
    label: 'S'
  },
  {
    label: 'T'
  },
  {
    label: 'U'
  },
  {
    label: 'V'
  },
  {
    label: 'W'
  },
  {
    label: 'X'
  },
  {
    label: 'Y'
  },
  {
    label: 'Z'
  }
];

storiesOf('Nav A-Z', module)
  .addDecorator(centered)
  .add('Standard', () => <NavAZ items={items} />);
