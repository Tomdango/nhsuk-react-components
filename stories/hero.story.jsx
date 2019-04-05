import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from '../src';

storiesOf('Hero', module)
  .add('With heading and content', () => (
    <Hero
      heading="We're here for you"
      content="Helping you take control of your health and wellbeing."
    />
  ))
  .add('With image, heading and content', () => (
    <Hero
      heading="We're here for you"
      imageURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg"
      content="Helping you take control of your health and wellbeing."
    />
  ))
  .add('With image only', () => (
    <Hero imageURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg" />
  ));
