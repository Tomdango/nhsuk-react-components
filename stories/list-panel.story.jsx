import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ListPanel } from '../src';

const Panels = [
  {
    label: 'A',
    id: 'A',
    backToTop: 'true',
    backToTopLink: '#nhsuk-nav-a-z',
    items: [
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
    ]
  },
  {
    label: 'B',
    id: 'B',
    disable: 'true',
    backToTop: 'true',
    backToTopLink: '#nhsuk-nav-a-z',
    message: 'There are currently no conditions listed'
  },
  {
    label: 'C',
    id: 'C',
    backToTop: 'true',
    backToTopLink: '#nhsuk-nav-a-z',
    items: [
      {
        URL: '/conditions/chest-pain/',
        link: 'Chest pain'
      },
      {
        URL: '/conditions/cold-sores/',
        link: 'Cold sore'
      }
    ]
  },
  {
    label: 'D',
    id: 'D',
    backToTop: 'true',
    backToTopLink: '#nhsuk-nav-a-z',
    items: [
      {
        URL: '/conditions/dandruff/',
        link: 'Dandruff'
      },
      {
        URL: '/conditions/dementia/',
        link: 'Dementia'
      },
      {
        URL: '/conditions/toothache/',
        link: 'Dental pain'
      }
    ]
  }
];

storiesOf('List Panel', module)
  .addDecorator(centered)
  .add('Standard', () => <ListPanel panels={Panels} />);
