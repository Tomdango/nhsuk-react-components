import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer, FeedbackBanner } from '../src';

const Links = [
  {
    URL: '#',
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

storiesOf('Feedback Banner', module)
  .add('Standard', () => (
    <FeedbackBanner
      title="Help us make the NHS website better"
      content="Your feedback helps us improve the NHS website."
    />
  ))
  .add('With Footer', () => (
    <div>
      <div style={{ height: '120vh' }} />
      <FeedbackBanner
        title="Help us make the NHS website better"
        content="Your feedback helps us improve the NHS website."
      />
      <Footer links={Links} />
    </div>
  ));
