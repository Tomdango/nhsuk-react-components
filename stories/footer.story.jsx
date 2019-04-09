import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '../src';

storiesOf('Footer', module).add('Standard', () => (
  <div style={{ marginTop: '80vh' }}>
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
  </div>
));
