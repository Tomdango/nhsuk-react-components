import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '../src';

storiesOf('Table', module)
  .add('Standard', () => (
    <div style={{ margin: '10vh' }}>
      <Table caption="Skin symptoms and possible causes">
        <Table.Header rows={['Skin symptoms', 'Possible cause']} />
        <Table.Body>
          <Table.Row
            items={['Blisters on lips or around the mouth', 'cold sores']}
          />
          <Table.Row items={['Itchy, dry, cracked, sore', 'eczema']} />
          <Table.Row items={['Itchy blisters', 'shingles, chickenpox']} />
        </Table.Body>
      </Table>
    </div>
  ))
  .add('As a panel', () => (
    <Table.Panel heading="Conditions similar to impetigo">
      <Table caption="Skin symptoms and possible causes">
        <Table.Header rows={['Skin symptoms', 'Possible cause']} />
        <Table.Body>
          <Table.Row
            items={['Blisters on lips or around the mouth', 'cold sores']}
          />
          <Table.Row items={['Itchy, dry, cracked, sore', 'eczema']} />
          <Table.Row items={['Itchy blisters', 'shingles, chickenpox']} />
        </Table.Body>
      </Table>
    </Table.Panel>
  ));
