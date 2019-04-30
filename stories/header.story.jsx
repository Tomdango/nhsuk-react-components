import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../src/components/header';

const searchAction = action('headerSearchAction');
const headerLinkAction = action('headerLinkClicked');

storiesOf('Header', module)
  .add('Standard', () => (
    <div style={{ width: '100%', marginBottom: '80vh' }}>
      <Header
        withNavigation
        withSearch
        onSearch={string => searchAction(string)}
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
  .add('With onClick', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header withNavigation>
        <Header.Link
          onClick={e => {
            e.preventDefault();
            headerLinkAction(e);
          }}
          mobileOnly
        >
          Home
        </Header.Link>
        <Header.Link
          onClick={e => {
            e.preventDefault();
            headerLinkAction(e);
          }}
        >
          Health A-Z
        </Header.Link>
        <Header.Link
          onClick={e => {
            e.preventDefault();
            headerLinkAction(e);
          }}
        >
          Live Well
        </Header.Link>
        <Header.Link
          onClick={e => {
            e.preventDefault();
            headerLinkAction(e);
          }}
        >
          Care and support
        </Header.Link>
        <Header.Link
          onClick={e => {
            e.preventDefault();
            headerLinkAction(e);
          }}
        >
          Health news
        </Header.Link>
        <Header.Link
          onClick={e => {
            e.preventDefault();
            headerLinkAction(e);
          }}
        >
          Services near you
        </Header.Link>
      </Header>
    </div>
  ))
  .add('With Search', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header
        withSearch
        onSearch={string => searchAction(string)}
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
