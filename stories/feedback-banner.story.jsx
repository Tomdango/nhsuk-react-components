import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer, FeedbackBanner } from '../src';

storiesOf('Feedback Banner', module)
  .add('Standard', () => (
    <FeedbackBanner
      title="Help us make the NHS website better"
      label="Answer the survey"
    >
      Your feedback helps us improve the NHS website.
    </FeedbackBanner>
  ))
  .add('With Footer', () => (
    <React.Fragment>
      <div style={{ height: '120vh' }} />
      <FeedbackBanner title="Help us make the NHS website better">
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
      <Footer>
        <Footer.Link href="https://www.nhs.uk/Pages/nhs-sites.aspx">
          NHS sites
        </Footer.Link>
        <Footer.Link href="https://www.nhs.uk/about-us">About us</Footer.Link>
        <Footer.Link href="https://www.nhs.uk/contact-us/">
          Contact us
        </Footer.Link>
        <Footer.Link href="https://www.nhs.uk/about-us/sitemap/">
          Sitemap
        </Footer.Link>
        <Footer.Link href="https://www.nhs.uk/our-policies/">
          Our policies
        </Footer.Link>
        <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
      </Footer>
    </React.Fragment>
  ));
