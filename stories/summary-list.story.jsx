import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SummaryList from '../src/components/summary-list';

const onActionClick = action('actionLinkClicked');

storiesOf('Summary List', module)
  .add('Standard', () => (
    <SummaryList style={{ padding: '20vh' }}>
      <SummaryList.Row
        rowKey="Name"
        action={{
          href: '#',
          text: 'Change',
          visuallyHiddenText: 'name'
        }}
      >
        Sarah Phillips
      </SummaryList.Row>
      <SummaryList.Row
        rowKey="Date of Birth"
        action={{
          href: '#',
          text: 'Change',
          visuallyHiddenText: 'date of birth'
        }}
      >
        5 January 1978
      </SummaryList.Row>
      <SummaryList.Row
        rowKey="Contact information"
        action={{
          href: '#',
          text: 'Change',
          visuallyHiddenText: 'contact details'
        }}
      >
        <p>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </p>
      </SummaryList.Row>
      <SummaryList.Row
        rowKey="Contact information"
        action={{
          href: '#',
          text: 'Change',
          visuallyHiddenText: 'contact information'
        }}
      >
        <p>07700 900457</p>
        <p>sarah.phillips@example.com</p>
      </SummaryList.Row>
    </SummaryList>
  ))
  .add('Summary list without actions', () => (
    <SummaryList style={{ padding: '20vh' }}>
      <SummaryList.Row rowKey="Name">Sarah Phillips</SummaryList.Row>
      <SummaryList.Row rowKey="Date of Birth">5 January 1978</SummaryList.Row>
      <SummaryList.Row rowKey="Contact information">
        <p>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </p>
      </SummaryList.Row>
      <SummaryList.Row rowKey="Contact information">
        <p>07700 900457</p>
        <p>sarah.phillips@example.com</p>
      </SummaryList.Row>
    </SummaryList>
  ))
  .add('Summary list with onClick', () => (
    <SummaryList style={{ padding: '20vh' }}>
      <SummaryList.Row
        rowKey="Name"
        action={{
          href: '#',
          text: 'Change',
          visuallyHiddenText: 'name',
          onClick: e => {
            e.preventDefault();
            onActionClick(e);
          }
        }}
      >
        Sarah Phillips
      </SummaryList.Row>
      <SummaryList.Row
        rowKey="Date of Birth"
        action={{
          href: '#',
          text: 'Change',
          visuallyHiddenText: 'date of birth',
          onClick: e => {
            e.preventDefault();
            onActionClick(e);
          }
        }}
      >
        5 January 1978
      </SummaryList.Row>
      <SummaryList.Row
        rowKey="Contact information"
        action={{
          href: '#',
          text: 'Change',
          visuallyHiddenText: 'contact details',
          onClick: e => {
            e.preventDefault();
            onActionClick(e);
          }
        }}
      >
        <p>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </p>
      </SummaryList.Row>
      <SummaryList.Row
        rowKey="Contact information"
        action={{
          href: '#',
          text: 'Change',
          visuallyHiddenText: 'contact information',
          onClick: e => {
            e.preventDefault();
            onActionClick(e);
          }
        }}
      >
        <p>07700 900457</p>
        <p>sarah.phillips@example.com</p>
      </SummaryList.Row>
    </SummaryList>
  ));
