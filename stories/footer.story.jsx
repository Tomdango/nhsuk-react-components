import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Footer from '../src/components/footer';

const clicked = action('footerLinkClicked');

storiesOf('Footer', module)
  .add('Standard', () => (
    <Footer
      linksVisuallyHiddenText="Support links"
      style={{ marginTop: '80vh' }}
    >
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
  ))
  .add('With onClick', () => (
    <Footer style={{ marginTop: '80vh' }}>
      <Footer.Link
        onClick={e => {
          e.preventDefault();
          clicked(e);
        }}
      >
        NHS sites
      </Footer.Link>
    </Footer>
  ))
  .add('With openInNewWindow', () => (
    <Footer style={{ marginTop: '80vh' }}>
      <Footer.Link
        openInNewWindow
        href="https://www.nhs.uk/Pages/nhs-sites.aspx"
      >
        NHS sites
      </Footer.Link>
    </Footer>
  ));
