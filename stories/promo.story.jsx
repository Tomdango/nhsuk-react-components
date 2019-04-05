import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Promo, PromoGroup } from '../src';

storiesOf('Promo', module)
  .addDecorator(centered)
  .add('Promo', () => (
    <Promo
      href="https://www.nhs.uk"
      heading="Save a life: give blood"
      description="Please register today. Donating blood is easy, and saves lives."
    />
  ))
  .add('Promo with image', () => (
    <div style={{ maxWidth: '25vw' }}>
      <Promo
        href="https://www.nhs.uk"
        heading="Save a life: give blood"
        imgURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
        description="Please register today. Donating blood is easy, and saves lives."
      />
    </div>
  ))
  .add('Promo with no description', () => (
    <Promo href="https://www.nhs.uk" heading="Save a life: give blood" />
  ))
  .add('Small promo', () => (
    <Promo
      small
      href="https://www.nhs.uk"
      heading="Access your GP record"
      description="Please register today. Donating blood is easy, and saves lives."
    />
  ))
  .add('Promo group', () => (
    <div style={{ margin: '10vh' }}>
      <PromoGroup>
        <PromoGroup.Promo
          href="https://www.nhs.uk"
          heading="Save a life: give blood"
          imgURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          description="Please register today. Donating blood is easy, and saves lives."
        />
        <PromoGroup.Promo
          href="https://www.nhs.uk"
          heading="Save a life: give blood"
          imgURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          description="Please register today. Donating blood is easy, and saves lives."
        />
      </PromoGroup>
      <PromoGroup>
        <PromoGroup.Promo
          href="https://www.nhs.uk"
          heading="Save a life: give blood"
          imgURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          description="Please register today. Donating blood is easy, and saves lives."
        />
        <PromoGroup.Promo
          href="https://www.nhs.uk"
          heading="Save a life: give blood"
          imgURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          description="Please register today. Donating blood is easy, and saves lives."
        />
        <PromoGroup.Promo
          href="https://www.nhs.uk"
          heading="Save a life: give blood"
          imgURL="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
          description="Please register today. Donating blood is easy, and saves lives."
        />
      </PromoGroup>
      <PromoGroup>
        <PromoGroup.Promo
          href="https://www.nhs.uk"
          heading="Save a life: give blood"
        />
        <PromoGroup.Promo
          href="https://www.nhs.uk"
          heading="Save a life: give blood"
        />
      </PromoGroup>
    </div>
  ));
