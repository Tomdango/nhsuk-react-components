import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../src';

const navItems = [
  {
    url: 'https://www.nhs.uk/conditions',
    label: 'Health A-Z'
  },
  {
    url: 'https://www.nhs.uk/live-well/',
    label: 'Live Well'
  },
  {
    url: 'https://www.nhs.uk/conditions/social-care-and-support/',
    label: 'Care and support'
  },
  {
    url: 'https://www.nhs.uk/news/',
    label: 'Health news'
  },
  {
    url: 'https://www.nhs.uk/service-search',
    label: 'Services near you'
  }
];

storiesOf('Header', module)
  .add('Standard', () => (
    <div style={{ width: '100%', marginBottom: '80vh' }}>
      <Header
        withNavigation
        withSearch
        navItems={navItems}
        // eslint-disable-next-line no-alert
        onSearch={string => window.alert(`Search: ${string}`)}
        searchAriaLabel="Search the NHS Website"
      />
    </div>
  ))
  .add('With Navigation', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header withNavigation navItems={navItems} />
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
  .add('With Logo (Transactional) with a long service name', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header
        transactional
        serviceName="Digital Service Manual"
        serviceNameUrl="/"
        withSearch
      />
    </div>
  ));
