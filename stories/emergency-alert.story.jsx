import React from 'react';
import { storiesOf } from '@storybook/react';
import { EmergencyAlert } from '../src';

storiesOf('Emergency Alert', module).add('Standard', () => (
  <EmergencyAlert>
    <EmergencyAlert.Title>National Flu Outbreak</EmergencyAlert.Title>
    <EmergencyAlert.Message>
      There has been a national flu outbreak.
      <EmergencyAlert.Link href="https://www.nhs.uk">
        How does it affect me
      </EmergencyAlert.Link>
    </EmergencyAlert.Message>
    <EmergencyAlert.LastUpdated>Updated 23 mins ago</EmergencyAlert.LastUpdated>
  </EmergencyAlert>
));
