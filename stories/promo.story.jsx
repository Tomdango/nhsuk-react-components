import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Promo from '../src/components/promo';

storiesOf('Promo', module)
  .addDecorator(centered)
  .add('Promo', () => (
    <Promo href="https://www.nhs.uk">
      <Promo.Heading>Save a life: give blood</Promo.Heading>
      <Promo.Content>
        Please register today. Donating blood is easy, and saves lives.
      </Promo.Content>
    </Promo>
  ))
  .add('Promo with image', () => (
    <div style={{ maxWidth: '25vw' }}>
      <Promo
        href="https://www.nhs.uk"
        imgUrl="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
        imgAlt="Give Blood Image"
      >
        <Promo.Heading>Save a life: give blood</Promo.Heading>
        <Promo.Content>
          Please register today. Donating blood is easy, and saves lives.
        </Promo.Content>
      </Promo>
    </div>
  ))
  .add('Promo with no description', () => (
    <Promo href="https://www.nhs.uk">
      <Promo.Heading>Save a life: give blood</Promo.Heading>
    </Promo>
  ))
  .add('Small promo', () => (
    <Promo href="https://www.nhs.uk" small>
      <Promo.Heading>Access your GP record</Promo.Heading>
      <Promo.Content>
        Please register today. Donating blood is easy, and saves lives.
      </Promo.Content>
    </Promo>
  ))
  .add('Promo group', () => (
    <div style={{ margin: '10vh' }}>
      <Promo.Group>
        <Promo
          href="https://www.nhs.uk"
          imgUrl="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          imgAlt="Give Blood Image"
        >
          <Promo.Heading>Save a life: give blood</Promo.Heading>
          <Promo.Content>
            Please register today. Donating blood is easy, and saves lives.
          </Promo.Content>
        </Promo>
        <Promo
          href="https://www.nhs.uk"
          imgUrl="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          imgAlt="Give Blood Image"
        >
          <Promo.Heading>Save a life: give blood</Promo.Heading>
          <Promo.Content>
            Please register today. Donating blood is easy, and saves lives.
          </Promo.Content>
        </Promo>
      </Promo.Group>
      <Promo.Group>
        <Promo
          href="https://www.nhs.uk"
          imgUrl="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          imgAlt="Give Blood Image"
        >
          <Promo.Heading>Save a life: give blood</Promo.Heading>
          <Promo.Content>
            Please register today. Donating blood is easy, and saves lives.
          </Promo.Content>
        </Promo>
        <Promo
          href="https://www.nhs.uk"
          imgUrl="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          imgAlt="Give Blood Image"
        >
          <Promo.Heading>Save a life: give blood</Promo.Heading>
          <Promo.Content>
            Please register today. Donating blood is easy, and saves lives.
          </Promo.Content>
        </Promo>
        <Promo
          href="https://www.nhs.uk"
          imgUrl="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          imgAlt="Give Blood Image"
        >
          <Promo.Heading>Save a life: give blood</Promo.Heading>
          <Promo.Content>
            Please register today. Donating blood is easy, and saves lives.
          </Promo.Content>
        </Promo>
      </Promo.Group>
      <Promo.Group>
        <Promo href="https://www.nhs.uk">
          <Promo.Heading>Save a life: give blood</Promo.Heading>
        </Promo>
        <Promo href="https://www.nhs.uk">
          <Promo.Heading>Save a life: give blood</Promo.Heading>
        </Promo>
      </Promo.Group>
    </div>
  ));
