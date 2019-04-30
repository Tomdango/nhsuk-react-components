import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import NavAZ from '../src/components/nav-a-z';

const items = [
  'A',
  {
    disable: 'true',
    label: 'B'
  },
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

storiesOf('Nav A-Z', module)
  .addDecorator(centered)
  .add('Using items', () => <NavAZ items={items} />)
  .add('Using fullAlphabet', () => <NavAZ fullAlphabet />)
  .add('Using fullAlphabet with excluded items', () => (
    <NavAZ fullAlphabet excludedItems={['A', 'C', 'E']} />
  ))
  .add('Using fullAlphabet with disabled items', () => (
    <NavAZ fullAlphabet disabledItems={['A', 'C', 'E']} />
  ))
  .add('Using fullAlphabet with disabled and excluded items', () => (
    <NavAZ
      fullAlphabet
      disabledItems={['A', 'C', 'E']}
      excludedItems={['G', 'I', 'K']}
    />
  ));
