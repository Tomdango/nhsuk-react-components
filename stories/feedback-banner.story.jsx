import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Footer from '../src/components/footer';
import FeedbackBanner from '../src/components/feedback-banner';

const clicked = action('feedbackBannerClicked');

storiesOf('Feedback Banner', module)
  .add('Standard', () => (
    <React.Fragment>
      <p>
        The feedback banner will appear after three seconds. You can change this
        with the &apos;timeout&apos; prop, or disable the timeout by setting it
        to 0.
      </p>
      <FeedbackBanner
        title="Help us make the NHS website better"
        label="Answer the survey"
        id="nhsuk-feedback-banner"
        visuallyHiddenText=" feedback invite"
        timeout={3000}
      >
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    </React.Fragment>
  ))
  .add('With onClick', () => (
    <FeedbackBanner
      title="Help us make the NHS website better"
      label="Answer the survey"
      onClick={e => {
        e.preventDefault();
        clicked(e);
      }}
      timeout={0}
    >
      Your feedback helps us improve the NHS website.
    </FeedbackBanner>
  ))
  .add('With Footer', () => (
    <React.Fragment>
      <p>
        Scroll down to see the automatic replacement of the feedback banner.
      </p>
      <div style={{ height: '100vh' }} />
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
      <FeedbackBanner title="Help us make the NHS website better">
        Your feedback helps us improve the NHS website.
      </FeedbackBanner>
    </React.Fragment>
  ));
