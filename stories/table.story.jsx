import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../src/components/table';

storiesOf('Table', module)
  .add('Standard', () => (
    <div style={{ margin: '10vh' }}>
      <Table caption="Skin symptoms and possible causes">
        <Table.Header>
          <th>Skin symptoms</th>
          <th>Possible cause</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>Blisters on lips or around the mouth</td>
            <td>cold sores</td>
          </Table.Row>
          <Table.Row>
            <td>Itchy, dry, cracked, sore</td>
            <td>eczema</td>
          </Table.Row>
          <Table.Row>
            <td>Itchy blisters</td>
            <td>shingles, chickenpox</td>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ))
  .add('As a panel', () => (
    <Table.Panel heading="Conditions similar to impetigo">
      <Table caption="Skin symptoms and possible causes">
        <Table.Header>
          <th>Skin symptoms</th>
          <th>Possible cause</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>Blisters on lips or around the mouth</td>
            <td>cold sores</td>
          </Table.Row>
          <Table.Row>
            <td>Itchy, dry, cracked, sore</td>
            <td>eczema</td>
          </Table.Row>
          <Table.Row>
            <td>Itchy blisters</td>
            <td>shingles, chickenpox</td>
          </Table.Row>
        </Table.Body>
      </Table>
    </Table.Panel>
  ));
