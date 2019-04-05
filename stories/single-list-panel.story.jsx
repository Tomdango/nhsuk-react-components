import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { SingleListPanel } from '../src';

const items = [
  {
    URL: '/conditions/abdominal-aortic-aneurysm/',
    link: 'AAA'
  },
  {
    URL: '/conditions/abdominal-aortic-aneurysm/',
    link: 'Abdominal aortic aneurysm'
  },
  {
    URL: '/conditions/abscess/',
    link: 'Abscess'
  }
];

storiesOf('List Panel', module)
  .addDecorator(centered)
  .add('Single Panel', () => (
    <SingleListPanel
      label="A"
      id="A"
      backToTop
      backToTopLink="#nhsuk-nav-a-z"
      items={items}
    />
  ));
