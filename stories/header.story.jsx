import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../src';

storiesOf('Header', module)
  .add('Standard', () => (
    <div style={{ width: '100%', marginBottom: '80vh' }}>
      <Header
        withNavigation
        withSearch
        // eslint-disable-next-line no-alert
        onSearch={string => window.alert(`Search: ${string}`)}
        searchAriaLabel="Search the NHS Website"
      >
        <Header.Link href="/" mobileOnly>
          Home
        </Header.Link>
        <Header.Link href="https://www.nhs.uk/conditions">
          Health A-Z
        </Header.Link>
        <Header.Link href="https://www.nhs.uk/live-well/">
          Live Well
        </Header.Link>
        <Header.Link href="https://www.nhs.uk/conditions/social-care-and-support/">
          Care and support
        </Header.Link>
        <Header.Link href="https://www.nhs.uk/news/">Health news</Header.Link>
        <Header.Link href="https://www.nhs.uk/service-search">
          Services near you
        </Header.Link>
      </Header>
    </div>
  ))
  .add('With Navigation', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header withNavigation>
        <Header.Link href="/" mobileOnly>
          Home
        </Header.Link>
        <Header.Link href="https://www.nhs.uk/conditions">
          Health A-Z
        </Header.Link>
        <Header.Link href="https://www.nhs.uk/live-well/">
          Live Well
        </Header.Link>
        <Header.Link href="https://www.nhs.uk/conditions/social-care-and-support/">
          Care and support
        </Header.Link>
        <Header.Link href="https://www.nhs.uk/news/">Health news</Header.Link>
        <Header.Link href="https://www.nhs.uk/service-search">
          Services near you
        </Header.Link>
      </Header>
    </div>
  ))
  .add('With Search', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header
        withSearch
        // eslint-disable-next-line no-alert
        onSearch={string => window.alert(`Search: ${string}`)}
        searchAriaLabel="Search the NHS Website"
      />
    </div>
  ))
  .add('With Logo', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header />
    </div>
  ))
  .add('With Logo (Transactional)', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header transactional />
    </div>
  ))
  .add('With Logo (Transactional) with a service name', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header
        transactional
        serviceName="Register with a GP"
        serviceNameUrl="/"
      />
    </div>
  ))
  .add('With Logo (Transactional) with a long service name', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header
        transactional
        serviceName="Find out why your NHS data matters"
        serviceNameUrl="/"
        longServiceName
      />
    </div>
  ))
  .add('With Logo (Transactional) with search', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header
        transactional
        serviceName="Digital Service Manual"
        serviceNameUrl="/"
        withSearch
      />
    </div>
  ));
