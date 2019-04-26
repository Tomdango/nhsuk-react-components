import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from '../src';

storiesOf('Hero', module)
  .add('With heading and content', () => (
    <Hero>
      <Hero.Heading>We&apos;re here for you</Hero.Heading>
      <Hero.Content>
        Helping you take control of your health and wellbeing.
      </Hero.Content>
    </Hero>
  ))
  .add('With image, heading and content', () => (
    <Hero imageURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg">
      <Hero.Heading>We&apos;re here for you</Hero.Heading>
      <Hero.Content>
        Helping you take control of your health and wellbeing.
      </Hero.Content>
    </Hero>
  ))
  .add('With image only', () => (
    <Hero imageURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg" />
  ));
