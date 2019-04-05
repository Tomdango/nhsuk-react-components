import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/nhsuk-frontend/packages/core/all.scss';
import { Breadcrumbs } from '../src';

storiesOf('Breadcrumb', module).add('Standard', () => (
  <Breadcrumbs>
    <Breadcrumbs.Item href="/level-one">Level One</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/level-one/level-two">Level Two</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/level-one/level-two/level-three">
      Level Three
    </Breadcrumbs.Item>
  </Breadcrumbs>
));
