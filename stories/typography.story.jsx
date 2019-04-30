import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Body, Heading, List } from '../src/components/typography';

storiesOf('Typography', module)
  .addDecorator(centered)
  .add('Body', () => (
    <React.Fragment>
      <Body size="l">Body Text (size l)</Body>
      <Body size="m">Body Text (size m)</Body>
      <Body size="s">Body Text (size s)</Body>
    </React.Fragment>
  ))
  .add('Heading', () => (
    <React.Fragment>
      <Heading size="xl">Heading Text (size xl)</Heading>
      <Heading size="l">Heading Text (size l)</Heading>
      <Heading size="m">Heading Text (size m)</Heading>
      <Heading size="s">Heading Text (size l)</Heading>
      <Heading size="xs">Heading Text (size xs)</Heading>
    </React.Fragment>
  ))
  .add('List', () => (
    <React.Fragment>
      <List type="number">
        <li>Number List</li>
        <li>Number List</li>
        <li>Number List</li>
        <li>Number List</li>
        <li>Number List</li>
      </List>
      <List type="bullet">
        <li>Bullet List</li>
        <li>Bullet List</li>
        <li>Bullet List</li>
        <li>Bullet List</li>
        <li>Bullet List</li>
      </List>
    </React.Fragment>
  ));
