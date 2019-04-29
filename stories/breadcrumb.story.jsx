import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../node_modules/nhsuk-frontend/packages/core/all.scss';
import { Breadcrumbs } from '../src';

const clickAction = action('clicked');

storiesOf('Breadcrumb', module)
  .add('Standard', () => (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/level-one">Level One</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/level-one/level-two">Level Two</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/level-one/level-two/level-three">
        Level Three
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ))
  .add('With onClick', () => (
    <Breadcrumbs>
      <Breadcrumbs.Item
        onClick={e => {
          e.preventDefault();
          clickAction(e);
        }}
      >
        Level One
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        onClick={e => {
          e.preventDefault();
          clickAction(e);
        }}
      >
        Level Two
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        onClick={e => {
          e.preventDefault();
          clickAction(e);
        }}
      >
        Level Three
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ));
