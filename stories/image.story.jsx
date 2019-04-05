import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Image } from '../src';

storiesOf('Image', module)
  .addDecorator(centered)
  .add('Without Caption', () => (
    <Image
      src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg"
      alt="Picture of allergic conjunctivitis"
    />
  ))
  .add('With Caption', () => (
    <Image
      src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg"
      alt="Picture of allergic conjunctivitis"
      caption="Itchy, red, watering eyes"
    />
  ));
