import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../src/components/pagination';

storiesOf('Pagination', module)
  .add('Standard', () => (
    <Pagination
      previousUrl="/section/treatments"
      previousPage="Treatments"
      previousTitle="Previous"
      nextUrl="/section/symptoms"
      nextPage="Symptoms"
      role="navigation"
      ariaLabel="pagination"
    />
  ))
  .add('Next Pagination', () => (
    <Pagination
      nextUrl="/section/symptoms"
      nextTitle="Next"
      nextPage="Symptoms"
    />
  ))
  .add('Previous Pagination', () => (
    <Pagination previousUrl="/section/treatments" previousPage="Treatments" />
  ));
