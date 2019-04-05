import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from '../src';

storiesOf('Pagination', module)
  .add('Standard', () => (
    <Pagination
      previousUrl="/section/treatments"
      previousPage="Treatments"
      nextUrl="/section/symptoms"
      nextPage="Symptoms"
    />
  ))
  .add('Next Pagination', () => (
    <Pagination nextUrl="/section/symptoms" nextPage="Symptoms" />
  ))
  .add('Previous Pagination', () => (
    <Pagination previousUrl="/section/treatments" previousPage="Treatments" />
  ));
