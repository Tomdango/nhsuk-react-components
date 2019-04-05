import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '../src';

const Links = [
  {
    URL: 'https://www.nhs.uk/Pages/nhs-sites.aspx',
    label: 'NHS sites'
  },
  {
    URL: 'https://www.nhs.uk/about-us',
    label: 'About us'
  },
  {
    URL: 'https://www.nhs.uk/contact-us/',
    label: 'Contact us'
  },
  {
    URL: 'https://www.nhs.uk/about-us/sitemap/',
    label: 'Sitemap'
  },
  {
    URL: 'https://www.nhs.uk/our-policies/',
    label: 'Our policies'
  }
];

storiesOf('Footer', module).add('Standard', () => (
  <div style={{ marginTop: '80vh' }}>
    <Footer links={Links} />
  </div>
));
