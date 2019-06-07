import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../src/components/header';

const searchAction = action('headerSearchAction');

storiesOf('Header', module)
  .add('Standard', () => (
    <Header style={{ width: '100%', marginBottom: '80vh' }}>
      <Header.Container>
        <Header.Logo />
        <Header.Content>
          <Header.MenuToggle />
          <Header.Search />
        </Header.Content>
      </Header.Container>
      <Header.Navigation title="Menu">
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
      </Header.Navigation>
    </Header>
  ))
  .add('With Navigation', () => (
    <Header style={{ width: '100%', marginBottom: '80vh' }}>
      <Header.Container>
        <Header.Logo />
        <Header.Content>
          <Header.MenuToggle />
        </Header.Content>
      </Header.Container>
      <Header.Navigation title="Menu">
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
      </Header.Navigation>
    </Header>
  ))

  .add('With Search', () => (
    <Header style={{ width: '100%', marginBottom: '80vh' }}>
      <Header.Container>
        <Header.Logo />
        <Header.Content>
          <Header.Search
            onSubmit={e => {
              e.preventDefault();
              searchAction(e);
            }}
            aria-label="Search the NHS Website"
          />
        </Header.Content>
      </Header.Container>
    </Header>
  ))

  .add('With Logo', () => (
    <Header style={{ width: '100%', marginBottom: '80vh' }}>
      <Header.Container>
        <Header.Logo />
      </Header.Container>
    </Header>
  ))
  .add('With Logo (Transactional)', () => (
    <Header transactional>
      <Header.Container>
        <Header.Logo />
      </Header.Container>
    </Header>
  ))
  .add('With Logo (Transactional) with a service name', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header transactional>
        <Header.Container>
          <Header.Logo></Header.Logo>
          <Header.Title>Register with a GP</Header.Title>
        </Header.Container>
      </Header>
    </div>
  ))
  .add('With Logo (Transactional) with a long service name', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header transactional>
        <Header.Container>
          <Header.Logo />
          <Header.Title long>Find out why your NHS data matters</Header.Title>
        </Header.Container>
      </Header>
    </div>
  ))
  .add('With Logo (Transactional) with search', () => (
    <div style={{ marginBottom: '80vh' }}>
      <Header transactional>
        <Header.Container>
          <Header.Logo></Header.Logo>
          <Header.Title>Digital Service Manual</Header.Title>
          <Header.Content>
            <Header.Search></Header.Search>
          </Header.Content>
        </Header.Container>
      </Header>
    </div>
  ));
