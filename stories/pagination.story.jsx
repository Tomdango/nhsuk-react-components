import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../src/components/pagination';

storiesOf('Pagination', module)
  .add('Standard', () => (
    <Pagination>
      <Pagination.Previous href="/section/treatments">
        Treatments
      </Pagination.Previous>
      <Pagination.Next href="/section/symptoms">Symptoms</Pagination.Next>
    </Pagination>
  ))
  .add('Next Pagination', () => (
    <Pagination>
      <Pagination.Next href="/section/treatments" description="Custom Next">
        Treatments
      </Pagination.Next>
    </Pagination>
  ))
  .add('Previous Pagination', () => (
    <Pagination>
      <Pagination.Previous
        href="/section/symptoms"
        description="Custom Previous"
      >
        Symptoms
      </Pagination.Previous>
    </Pagination>
  ));
